const sidebar = document.getElementById("sidebar");
const themeBtn = document.getElementById("themeBtn");
const search = document.getElementById("search");

document.getElementById("menuBtn")?.addEventListener("click", () => {
  sidebar?.classList.toggle("open");
});

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  if (themeBtn) {
    themeBtn.textContent = dark ? "☀️ Tema claro" : "🌙 Tema escuro";
    themeBtn.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
  }
  try { localStorage.setItem("helpdesk-theme", dark ? "dark" : "light"); } catch (_) {}
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("helpdesk-theme"); } catch (_) {}
if (savedTheme === "dark") setTheme(true);
else if (savedTheme === "light") setTheme(false);
else setTheme(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false);

themeBtn?.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});

document.querySelectorAll("#toc a").forEach((a) =>
  a.addEventListener("click", () => sidebar?.classList.remove("open"))
);

search?.addEventListener("input", () => {
  const q = search.value.toLowerCase().trim();
  document.querySelectorAll(".step,.section").forEach((el) => {
    el.style.display = !q || el.innerText.toLowerCase().includes(q) ? "" : "none";
  });
});

const links = [...document.querySelectorAll("#toc a")];
const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }
  });
}, { rootMargin: "-20% 0px -65% 0px" });
targets.forEach((t) => observer.observe(t));

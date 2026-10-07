const sidebar=document.getElementById("sidebar");
document.getElementById("menuBtn")?.addEventListener("click",()=>sidebar.classList.toggle("open"));
document.getElementById("themeBtn")?.addEventListener("click",()=>document.body.classList.toggle("dark"));
document.querySelectorAll("#toc a").forEach(a=>a.addEventListener("click",()=>sidebar.classList.remove("open")));

const search=document.getElementById("search");
search?.addEventListener("input",()=>{
  const q=search.value.toLowerCase().trim();
  document.querySelectorAll(".step,.section").forEach(el=>{
    const match=!q || el.innerText.toLowerCase().includes(q);
    el.style.display=match?"":"none";
  });
});
const links=[...document.querySelectorAll("#toc a")];
const targets=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
    }
  });
},{rootMargin:"-20% 0px -65% 0px"});
targets.forEach(t=>observer.observe(t));

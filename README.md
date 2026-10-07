# Correção do tema — Docs Helpdesk Django

Substitua `style.css` e `app.js` no repositório.

Correções principais:
- remove os blocos brancos que permaneciam no tema escuro;
- corrige cards, passos, FAQ, busca, botões, alertas e lista de testes;
- melhora contraste de texto e bordas no dark mode;
- persiste o tema escolhido no `localStorage`;
- usa a preferência de tema do sistema quando não houver escolha salva;
- alterna o botão entre `🌙 Tema escuro` e `☀️ Tema claro`.

Depois:

```bash
git add style.css app.js
git commit -m "fix: corrigir tema claro e escuro"
git push origin main
```

// Copia o banco de perguntas do site (../questions.js) para a app e acrescenta os ids.
// Uso: npm run sync
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "..", "..", "questions.js"), "utf8");
const out =
  "// FICHEIRO GERADO por scripts/sync-questions.js. Não editar à mão: editar ../questions.js e correr `npm run sync`.\n" +
  src +
  "\nQUESTIONS.forEach((q, i) => { q.id = i; });\nexport default QUESTIONS;\n";
fs.writeFileSync(path.join(__dirname, "..", "src", "questions.js"), out);
console.log("src/questions.js gerado");

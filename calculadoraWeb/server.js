const express = require("express");
const cors = require("cors");
const math = require("mathjs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Servir os arquivos HTML, CSS e JS
app.use(express.static(path.join(__dirname, "public")));

app.post("/calcular", (req, res) => {
  const { expressao } = req.body;

  try {
    const resultado = math.evaluate(expressao);

    res.json({
      sucesso: true,
      resultado,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: "Expressão inválida",
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

async function calcular() {
  const expressao = document.getElementById("expressao").value;

  const resposta = await fetch("http://localhost:3000/calcular", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      expressao,
    }),
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    document.getElementById("resultado").innerHTML =
      "Resultado: " + dados.resultado;
  } else {
    document.getElementById("resultado").innerHTML = dados.erro;
  }
}

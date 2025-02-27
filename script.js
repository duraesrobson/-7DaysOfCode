
let nome;
let idade;
let linguagem;
let gosta;
const btnContainer1 = document.querySelector(".desafio__dia3__btn");

document.getElementById("btnEnviar").onclick = function () {
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    linguagem = document.getElementById("linguagem").value;

    if (nome && idade && linguagem) {
        document.getElementById("desafio__dia2__resposta").textContent = `Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}!`;
        document.getElementById("linguagem__span").textContent = linguagem
        document.getElementById("segunda__pergunta").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

document.getElementById("btnGosta").onclick = function () {
    gosta = document.getElementById("gosta").value;

    if (gosta !== "1" && gosta !== "2") {
        alert("Digite 1 ou 2!");
    } else if (gosta == 1) {
        document.getElementById("segunda__pergunta__resposta").textContent = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else {
        document.getElementById("segunda__pergunta__resposta").textContent = "Ahh que pena... Já tentou aprender outras linguagens?";
    }

    document.getElementById("btnReset").style.display = "block";
}

document.getElementById("btnReset").onclick = function () {
    location.reload();
}

btnContainer1.addEventListener ("click", function(event) {
    // Verifica qual botão foi clicado
    if (event.target.id === "btn__frontend") {
        document.getElementById("perguntaFrontEnd").style.display = "block";
    } else if (event.target.id === "btn__backend") {
        document.getElementById("perguntaBackEnd").style.display = "block";
    } else {
        resposta.textContent = "Clique em um botão válido!";
    }
})








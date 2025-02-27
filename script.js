
let nome;
let idade;
let linguagem;
let gosta;


document.getElementById("btnEnviar").onclick = function() {
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    linguagem = document.getElementById("linguagem").value;
    document.getElementById("desafio__dia2__resposta").textContent = `Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}!`;

    document.getElementById("linguagem__span").textContent = linguagem
    document.getElementById("segunda__pergunta").style.display = "block";

}

document.getElementById("btnGosta").onclick = function() {
    gosta = document.getElementById("gosta").value;

    if (gosta == 1) {
        document.getElementById("segunda__pergunta__resposta").textContent = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else {
        document.getElementById("segunda__pergunta__resposta").textContent = "Ahh que pena... Já tentou aprender outras linguagens?"
        }
}






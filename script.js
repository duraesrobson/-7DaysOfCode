
let nome;
let idade;
let linguagem;
let gosta;
let especialidade;
let frontend = false;
let backend = false;
let tecnologias = [];


document.getElementById("btnResponder").onclick = function () {
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



document.querySelectorAll(".desafio__dia3__btn__area button").forEach(btn => {
    btn.addEventListener("click", function (event) {

        if (event.target.id === "btn__frontend") {
            frontend = true;
            especialidade = "Front-End";
            document.getElementById("perguntaFrontEnd").style.display = "block";
        } else {
            backend = true;
            especialidade = "Back-End";
            document.getElementById("perguntaBackEnd").style.display = "block";
        }

        document.getElementById("btn__frontend").disabled = true;
        document.getElementById("btn__backend").disabled = true;

    });

});

document.querySelectorAll(".desafio__dia3__btn__frontend button, .desafio__dia3__btn__backend button").forEach(btn => {
    btn.addEventListener("click", function (event) {

        document.getElementById("especializarPergunta").textContent = especialidade;
        document.getElementById("perguntaComoSeguir").style.display = "block";

        document.querySelectorAll(".desafio__dia3__btn__frontend button, .desafio__dia3__btn__backend button").disabled = true;

        
    });

});

document.querySelectorAll(".desafio__dia3__btn__sequencia button").forEach(btn => {
    btn.addEventListener("click", function (event) {

        if (event.target.id === "btn__especializar" && frontend === true) {
            document.getElementById("sequencia__descricao").textContent = "Aprimore-se em usabilidade e acessibilidade, e domine frameworks como React ou Vue, além de CSS avançado para criar interfaces responsivas e funcionais."
        } else if (event.target.id === "btn__especializar" && backend === true) {
            document.getElementById("sequencia__descricao").textContent = "Foque em estruturas de dados e algoritmos, e aprenda tecnologias como Node.js ou Java, além de trabalhar com bancos de dados e CI/CD para otimizar suas aplicações."
        } else {
            document.getElementById("sequencia__descricao").textContent = "Combine conhecimentos de Front-End e Back-End, e aprenda frameworks Fullstack como Next.js ou NestJS, além de boas práticas de versionamento de código e trabalho em equipe."
        }

        document.getElementById("btn__especializar").disabled = true;
        document.getElementById("btn__fullstack").disabled = true

        document.getElementById("perguntaLoop").style.display = "block";
        

        
    });
})

document.getElementById("btnEnviar").onclick = function() {
    
    document.getElementById("sequencia__descricao2").style.display = "block";
    let continuar = true;

    while (continuar) {
        let input__tecnologia = prompt("Qual tecnologia gostaria de aprender?");


       if (input__tecnologia === "") {
        alert("Digite uma tecnologia válida!");
        break;
       }

       if (tecnologias.includes(input__tecnologia)) {
        alert("Essa tecnologia já foi incluída!");
        break; 
    }

       tecnologias.push(input__tecnologia);
       

       alert(`Você adicionou a tecnologia: ${input__tecnologia}!`);

       continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");

       input__tecnologia = "";

    }


    atualizarListaTecnologias();
}

function atualizarListaTecnologias() {
    let listaTecnologias = document.getElementById("listaTecnologias");
    listaTecnologias.innerHTML = tecnologias.map(input__tecnologia => `<li>${input__tecnologia}</li>`).join("");

}




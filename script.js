//Código do #Day2
let nome;
let idade;
let linguagem;
let gosta;
let especialidade;
let frontend = false;
let backend = false;

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

//Código do #Day3
let tecnologias = [];

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


    atualizarListaDia6Tecnologias();
}

function atualizarListaDia6Tecnologias() {
    let listaTecnologias = document.getElementById("listaTecnologias");
    listaTecnologias.innerHTML = tecnologias.map(input__tecnologia => `<li>${input__tecnologia}</li>`).join("");

}

//Código do #Day4
let chute;
let tentativas = 0;
let numeroCerto = Math.floor(Math.random() *10+1);

document.getElementById("btnAdivinhar").onclick = function() {
    chute = document.getElementById("chuteUsuario").value;

    if (chute === "" || isNaN(chute)) {
        alert("Digite um número válido!");
        return;
        
    }

    tentativas++;

    if (chute == numeroCerto) {
        document.getElementById("desafio__dia4__resposta").style.color = "#145bd5";
        document.getElementById("desafio__dia4__resposta").textContent = `Parabéns, você acertou o número! O número era ${numeroCerto}.`;
        document.getElementById("btnAdivinhar").disabled = true;
        document.getElementById("btnAdivinharReset").style.display = "block";
    } else if (tentativas === 1) {
        document.getElementById("desafio__dia4__resposta").style.color = "red";
        document.getElementById("desafio__dia4__resposta").textContent = "Tente outro número!";
    } else if (tentativas === 2) {
        document.getElementById("desafio__dia4__resposta").style.color = "red";
        document.getElementById("desafio__dia4__resposta").textContent = "Quase lá, última tentativa!";    
    } else {
        document.getElementById("desafio__dia4__resposta").style.color = "red";
        document.getElementById("desafio__dia4__resposta").textContent = `Poxa, não foi dessa vez. O número era ${numeroCerto}.`
        document.getElementById("btnAdivinhar").disabled = true;
        document.getElementById("btnAdivinharReset").style.display = "block";
    }

    document.getElementById("chuteUsuario").value = "";

    document.getElementById("btnAdivinharReset").onclick = function () {
        document.getElementById("btnAdivinharReset").style.display = "none";
        document.getElementById("desafio__dia4__resposta").textContent = "";
        document.getElementById("btnAdivinhar").disabled = false;
        numeroCerto = Math.floor(Math.random() *10+1);
        tentativas = 0;

    }

}

//Código do #Day5
let listasCategorias = {
    frutas: [],
    doces: [],
    congelados: [],
    laticinios: []
};
let itemCompra;

document.querySelectorAll(".desafio__dia5__btn__area button").forEach(btn => {
    btn.addEventListener("click", function (event) {
        if (event.target.id === "btnSim") {
            document.getElementById("dia5PrimeiraPergunta").style.display = "none";
            document.getElementById("dia5SegundaPergunta").style.display = "block";
            document.getElementById("lista__compras__container").style.display = "none"; 
            document.getElementById("listaCompras").style.display = "none"; 
            document.getElementById("btnAdicionarReset").style.display = "none"; 
        } else if (event.target.id === "btnNao") {
            
            document.getElementById("lista__compras__container").style.display = "block";
            document.getElementById("listaCompras").style.display = "block"; 
            document.getElementById("item__adicionado").style.display = "none";
            document.getElementById("btnAdicionarReset").style.display = "block";
        }
    });
});

document.getElementById("btn__adicionar").onclick = function() {
    let itemCompra = document.getElementById("item__usuario").value;

    if (itemCompra === "") {
        alert("Digite um item válido!");
        return;
    }
    
    for (let categoria in listasCategorias) {
        if (listasCategorias[categoria].includes(itemCompra)) {
            alert("Esse item já está na lista!");
            return;
        }
    }

    document.getElementById("dia5SegundaPergunta").style.display = "none";
    document.getElementById("perguntaCategoria").style.display = "block";
    document.getElementById("labelPerguntaCategoria").textContent = `Qual a categoria do item (${itemCompra}) ?`

    document.querySelectorAll(".desafio__dia5__btn__categorias button").forEach(btn => {
        btn.onclick = function () {
            let categoria = btn.id;
            if (categoria === "btnFrutas") {
                listasCategorias["frutas"].push(itemCompra);
            } else if (categoria === "btnDoces") {
                listasCategorias["doces"].push(itemCompra);
            } else if (categoria === "btnCongelados") {
                listasCategorias["congelados"].push(itemCompra);
            } else {
                listasCategorias["laticinios"].push(itemCompra);
            }

            document.getElementById("perguntaCategoria").style.display = "none";
            document.getElementById("dia5PrimeiraPergunta").style.display = "block";
            document.getElementById("item__adicionado").style.display = "block";
            document.getElementById("item__adicionado").textContent = `O item ${itemCompra} foi adicionado a lista de compras.`
            
            atualizarLista();
        };
        
    });
};

function atualizarLista() {
    let listaHTML = `
        <li><strong>Congelados:</strong><span class="item__da__lista"> ${listasCategorias.congelados.join(", ") || "Nenhum"}</span></li>
        <li><strong>Laticínios:</strong><span class="item__da__lista"> ${listasCategorias.laticinios.join(", ") || "Nenhum"} </span></li>
        <li><strong>Frutas:</strong><span class="item__da__lista"> ${listasCategorias.frutas.join(", ") || "Nenhum"} </span></li>
        <li><strong>Doces:</strong><span class="item__da__lista"> ${listasCategorias.doces.join(", ") || "Nenhum"}</span></li>
    `;
    document.getElementById("listaCompras").innerHTML = listaHTML;
}

document.getElementById("btnAdicionarReset").onclick = function () {
    listasCategorias = {
        frutas: [],
        doces: [],
        congelados: [],
        laticinios: []
    };
    atualizarLista(); // Atualiza para lista vazia
    document.getElementById("lista__compras__container").style.display = "none";
    document.getElementById("listaCompras").style.display = "none";
    document.getElementById("btnAdicionarReset").style.display = "none";
};


//Código do #Day6
let listasCategoriasDia6 = {
    frutas: [],
    doces: [],
    congelados: [],
    laticinios: []
};
let itemCompraDia6;

document.querySelectorAll(".desafio__dia6__btn__area button").forEach(btn => {
    btn.addEventListener("click", function (event) {
        if (event.target.id === "btnSimDia6") {
            document.getElementById("dia6PrimeiraPergunta").style.display = "none";
            document.getElementById("dia6SegundaPergunta").style.display = "block";
            document.getElementById("lista__compras__container__dia6").style.display = "none"; 
            document.getElementById("listaComprasDia6").style.display = "none"; 
            document.getElementById("btnAdicionarResetDia6").style.display = "none";
            
        } else if (event.target.id === "btnNaoDia6") {
            document.getElementById("lista__compras__container__dia6").style.display = "block";
            document.getElementById("listaComprasDia6").style.display = "block"; 
            document.getElementById("item__adicionado__dia6").style.display = "none";
            document.getElementById("btnAdicionarResetDia6").style.display = "block";
        }
});
});

    document.getElementById("btnRemoverItem").onclick = function(){
        atualizarListaDia6();

        if (Object.values(listasCategoriasDia6).every(categoria => categoria.length === 0)) {
            alert("A lista de compras está vazia!");
            return;
        }
        
        document.getElementById("dia6PerguntaRemover").style.display = "block";
        document.getElementById("dia6PrimeiraPergunta").style.display = "none";
        document.getElementById("lista__compras__container__dia6").style.display = "block";
        document.getElementById("listaComprasDia6").style.display = "block"; 
        document.getElementById("btnAdicionarResetDia6").style.display = "block";
    }

//remover item
document.getElementById("btnRemover").onclick = function() {

    let itemRemovido = document.getElementById("remover__item__usuario__dia6").value;
    
    if (itemRemovido === "") {
        alert("Digite um item válido!");
        return;
    }

    let itemEncontrado = false;
    for (let categoria in listasCategoriasDia6) {
            if (listasCategoriasDia6[categoria].includes(itemRemovido)) {
            listasCategoriasDia6[categoria] = listasCategoriasDia6[categoria].filter(item => item !== itemRemovido);
            itemEncontrado = true;
        }
    }

    if (itemEncontrado) {
        document.getElementById("item__removido__dia6").style.display = "block";
        document.getElementById("item__adicionado__dia6").style.display = "none";
        document.getElementById("lista__compras__container__dia6").style.display = "none";
        document.getElementById("listaComprasDia6").style.display = "none";
        document.getElementById("dia6PerguntaRemover").style.display = "none";
        document.getElementById("dia6PrimeiraPergunta").style.display = "block";
        document.getElementById("item__removido__dia6").textContent = `O item ${itemRemovido} foi removido da lista de compras.`;

    } else {
        alert(`O item ${itemRemovido} não foi encontrado na lista de compras.`);
    }

    atualizarListaDia6();
};

//adicionar item
document.getElementById("btn__adicionar__dia6").onclick = function() {
    let itemCompraDia6 = document.getElementById("item__usuario__dia6").value;

    if (itemCompraDia6 === "") {
        alert("Digite um item válido!");
        return;
    }
    
    for (let categoria in listasCategorias) {
        if (listasCategoriasDia6[categoria].includes(itemCompraDia6)) {
            alert("Esse item já está na lista!");
            return;
        }
    }
    
    document.getElementById("item__removido__dia6").style.display = "none";
    document.getElementById("dia6SegundaPergunta").style.display = "none";
    document.getElementById("perguntaCategoriaDia6").style.display = "block";
    document.getElementById("labelPerguntaCategoriaDia6").textContent = `Qual a categoria do item (${itemCompraDia6}) ?`;

    document.querySelectorAll(".desafio__dia6__btn__categorias button").forEach(btn => {
        btn.onclick = function () {
            let categoria = btn.id;
            if (categoria === "btnFrutasDia6") {
                listasCategoriasDia6["frutas"].push(itemCompraDia6);
            } else if (categoria === "btnDocesDia6") {
                listasCategoriasDia6["doces"].push(itemCompraDia6);
            } else if (categoria === "btnCongeladosDia6") {
                listasCategoriasDia6["congelados"].push(itemCompraDia6);
            } else {
                listasCategoriasDia6["laticinios"].push(itemCompraDia6);
            }

            document.getElementById("perguntaCategoriaDia6").style.display = "none";
            document.getElementById("dia6PrimeiraPergunta").style.display = "block";
            document.getElementById("item__adicionado__dia6").textContent = `O item ${itemCompraDia6} foi adicionado a lista de compras.`;
            document.getElementById("item__adicionado__dia6").style.display = "block";
            
            atualizarListaDia6();
        };
    });
};

function atualizarListaDia6() {
    let listaHTML = `
        <li><strong>Congelados:</strong><span class="item__da__lista"> ${listasCategoriasDia6.congelados.join(", ") || "Nenhum"}</span></li>
        <li><strong>Laticínios:</strong><span class="item__da__lista"> ${listasCategoriasDia6.laticinios.join(", ") || "Nenhum"} </span></li>
        <li><strong>Frutas:</strong><span class="item__da__lista"> ${listasCategoriasDia6.frutas.join(", ") || "Nenhum"} </span></li>
        <li><strong>Doces:</strong><span class="item__da__lista"> ${listasCategoriasDia6.doces.join(", ") || "Nenhum"}</span></li>
    `;
    document.getElementById("listaComprasDia6").innerHTML = listaHTML;
}

document.getElementById("btnAdicionarResetDia6").onclick = function () {
    listasCategoriasDia6 = {
        frutas: [],
        doces: [],
        congelados: [],
        laticinios: []
    };
    atualizarListaDia6(); // Atualiza para lista vazia
    document.getElementById("dia6PrimeiraPergunta").style.display = "block";
    document.getElementById("lista__compras__container__dia6").style.display = "none";
    document.getElementById("listaComprasDia6").style.display = "none";
    document.getElementById("btnAdicionarResetDia6").style.display = "none";
    document.getElementById("dia6PerguntaRemover").style.display = "none";
    document.getElementById("item__removido__dia6").style.display = "none";
};

//Código do #Day7
function somar(valor1, valor2) {
    return valor1 + valor2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2;
}

let valor1;
let valor2;
let resultado;
let soma = false
let subtracao = false;
let multiplicacao = false;
let divisao = false;

document.querySelectorAll(".desafio__dia7__btn__area button, .desafio__dia7__codigo button").forEach(btn => {
    btn.addEventListener("click", function (event) {

        document.getElementById("dia7Escolha").style.display = "none";
        document.getElementById("dia7Calculo").style.display = "block";

        if (event.target.id === "btnSomar") {
            soma = true;    
        } else if (event.target.id === "btnSubtrair") {
            subtracao = true;
        } else if (event.target.id === "btnMultiplicar") {
            multiplicacao = true
        } else {
            divisao = true;
        }
    });
});

document.getElementById("btnCalcular").onclick = function() {

        valor1 = parseFloat(document.getElementById("usuarioValor1").value);
        valor2 = parseFloat(document.getElementById("usuarioValor2").value);
        if (soma === true) {
            resultado = somar(valor1, valor2);
        } else if (subtracao === true) {
            resultado = subtrair(valor1, valor2);
        } else if (multiplicacao === true) {
            resultado = multiplicar(valor1, valor2);
        } else {
            resultado = dividir(valor1, valor2);
        }

        document.getElementById("dia7Calculo").style.display = "none";
        document.getElementById("dia7Resultado").style.display = "block";
        document.getElementById("resultadoCalculo").textContent = `O resultado é: ${resultado}`;

}

document.getElementById("btnNovoCalculo").onclick = function() {
    soma = false;
    subtracao = false;
    multiplicacao = false;
    divisao = false;
    document.getElementById("dia7Calculo").style.display = "none";
        document.getElementById("dia7Escolha").style.display = "block";
        document.getElementById("dia7Resultado").style.display = "none";
        document.getElementById("usuarioValor1").value = "";
        document.getElementById("usuarioValor2").value = "";
        document.getElementById("resultadoCalculo").textContent = "";
}

document.getElementById("btnSair").onclick = function() {
    document.getElementById("dia7Resultado").style.display = "none";
    document.getElementById("dia7Calculo").style.display = "none";
        document.getElementById("sairCalculo").textContent = "Obrigado por testar a calculadora, até a próxima!";
}







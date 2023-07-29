// ELEMENTOS MANIPULAVEIS;

var start = document.getElementById("btn-start"); // botão inicial;
var questao = document.getElementById("total-questao"); // total questões;
var pergunta = document.getElementById("pergunta"); // pergunta;
var resposta = document.getElementById("resposta"); // resposta correta;
var Qatual = document.getElementById("questao"); // questão atual;
var li = document.querySelectorAll(".alternativa"); // todas as alternativas;
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var totalAcerto = 0; // placar de pontos;

// 1. Trazer dados do json para variáveis;
function trazerDados(v) 
{
    var i = v -1;

    console.log("Valor de i:", i );

    const url = 'dados.json';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao acessar o arquivo JSON");
            }
            return response.json();
        })
        .then(dados => {
            // Total de questões e questão atual;
            let totalQuestao = dados.questoes.length;
            let atualQuestao = dados.questoes[i].numero;
            questao.textContent = atualQuestao + " de " + totalQuestao;

            // Add perguntas e alternativas;
            pergunta.textContent = dados.questoes[i].pergunta;
            Qatual.value = atualQuestao;
            resposta.value = dados.questoes[i].resposta;
            a.textContent = dados.questoes[i].a;
            b.textContent = dados.questoes[i].b;
            c.textContent = dados.questoes[i].c;
            d.textContent = dados.questoes[i].d;
        })    
}

function fimJogo(pontos)
{
    const sub = document.querySelector("#sub-titulo");
    sub.classList.remove("invisible");

    // Mostrar a quantidade de acertos;
    switch (pontos)
    {
        case 0:
            sub.textContent = "Você acertou nada! Parabéns!";
        break;

        case 1:
            sub.textContent = "Você acertou " + pontos + " questão";
        break;
        
        default:
            sub.textContent = "Você acertou " + pontos + " questões";
    }
    
    // Tornando as questões invisiveis;
    const main = document.querySelector("main");
    main.classList.add("invisible");

    // Botão de iniciar quiz novamente;
    start.classList.remove("invisible");
    start.textContent = "Repetir";

}

// Retirar fundo do main de erro e acerto;
function retirar()
{
    const main = document.querySelector("main");
    const questao = document.querySelector("#total-questao");
    const pergunta = document.querySelector("#pergunta");

    pergunta.style.color = "black";
    questao.style.color = "black";
    main.style.backgroundColor = "white";
}

// Verifica se acertou ou errou a questão;
function verificarAcerto(i, evento)
{
    let correta = resposta.value;
    let alternativa = evento.target.textContent;

    if (correta == alternativa) {
                   // Se acerta, ficar verde o fundo;
        const main = document.querySelector("main");
        const questao = document.querySelector("#total-questao");
        const pergunta = document.querySelector("#pergunta");
        pergunta.style.color = "white";
        questao.style.color = "white";

        main.style.backgroundColor = "green";
        totalAcerto = (totalAcerto + 1);
    } 
    else 
    {
        const main = document.querySelector("main");
        const questao = document.querySelector("#total-questao");
        const pergunta = document.querySelector("#pergunta");
        pergunta.style.color = "white";
        questao.style.color = "white";

        main.style.backgroundColor = "red";
    }

    setTimeout(function()  // Mudar de questão;
    {
        if(i < 10)
        {
            trazerDados(parseInt(i,10) + 1);
        }
        else
        {
            fimJogo(totalAcerto);
        }

        retirar();

    }, 400);
}


// INICIO DO PROGRAMA;
function startQuiz() {
    const main = document.getElementById("main");
    const sub = document.querySelector("#sub-titulo");
    sub.classList.add("invisible");
    main.classList.remove("invisible");
    start.classList.add("invisible");

    trazerDados(1);
}


// EVENTO DE INICIAR QUIZ;
start.addEventListener("click", function() {
    startQuiz();
});

// EVENTO DAS ALTERNATIVAS;
li.forEach(alternativa => {
    alternativa.addEventListener("click", function(event) {
        verificarAcerto(Qatual.value, event);
    });
});

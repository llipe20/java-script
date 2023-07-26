
var start = document.getElementById("btn-start");
var questao = document.getElementById("total-questao");
var pergunta = document.getElementById("pergunta");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var totalAcerto = 0;

function trazerDados(i) {
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
            a.textContent = dados.questoes[i].a;
            b.textContent = dados.questoes[i].b;
            c.textContent = dados.questoes[i].c;
            d.textContent = dados.questoes[i].d;
        })    
}

verificarAcerto(i,v)
{
    let resposta = dados.questoes[i].resposta;
    let alternativa = document.getElementById(v).value;

    if (resposta == alternativa) {
        setTimeout(function() {
            const main = document.querySelector("main");
            main.style.backgroundColor = "green";
        }, 1500);

        totalAcerto += 1;
    } else {
        setTimeout(function() {
            const main = document.querySelector("main");
            main.style.backgroundColor = "red";
        }, 1500);
    }

    setTimeout(function() {
        promixaQuestao(i);
    }, 1500);
}

 // Função para passar para próxima questão;
promixaQuestao(i)
{
    if (i == 0)
    {
        return 0;
    }
    else
    {
        return i + 1;
    }
}

function startQuiz() {
    const main = document.querySelector("main");
    main.classList.remove("invisible");
    start.classList.add("invisible");

    trazerDados(0);
}

start.addEventListener("click", function() {
    startQuiz();
});

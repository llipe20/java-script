
// Função de verificar os caracteres das notas;
function verificarNota(nota)
{
    if (nota < 0 || nota > 10)
    {
        const alerta = document.querySelector(".invisible");
        alerta.style.display = "flex";

        setTimeout (function() {
            alerta.style.display = "none";
        }, 3000);
    }
}

// Criando evento para os inputs de nota;
var input = document.getElementById("nota1");
input.addEventListener("blur", function(e) {
    e.preventDefault();
    verificarNota(input.value);
})

// Função de calcular média das notas;
function calcular()
{
    let nota1 = Number.parseFloat(document.getElementById("nota1").value);
    let nota2 = Number.parseFloat(document.getElementById("nota2").value);

    if (nota1 && nota2)
    {
        let calculo = (nota1 + nota2) / 2;
        let media = document.getElementById("media");
        media.value = calculo.toFixed(1);
        let resultado = document.getElementById("resultado");
        let situacao = document.querySelector("#resultado");

        if (calculo < 6)
        {
            resultado.classList.add("reprovado");
            resultado.classList.remove("aprovado", "recuperacao");
            situacao.value = "Reprovado!";
        }
        else if (calculo > 6 && calculo < 7)
        {
            resultado.classList.add("recuperacao");
            resultado.classList.remove("aprovado", "reprovado");
            situacao.value = "Recuperação!";
        }
        else 
        {
            resultado.classList.add("aprovado");
            resultado.classList.remove("reprovado", "recuperacao");
            situacao.value = "Aprovado!";
        }
    }
    
}

// Evento de disparo no botão de calcular;
var btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", function(e) {
    e.preventDefault();
    calcular();
})

function limpar()
{
    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const media = document.getElementById("media");
    const resultado = document.querySelector("#resultado");

    nota1.value = "";
    nota2.value = "";
    media.value = "0";
    resultado.value = "Situação final";
    resultado.classList.remove("reprovado", "aprovado", "recuperacao");
}

// Evento de disparo para limpar os dados;
var btnLimpar = document.getElementById("limpar");

btnLimpar.addEventListener("click", function(e) {
    e.preventDefault();
    limpar();
})

// Pegando o botão de enviar dados
var btnEnviar = document.getElementById("enviar");

function calcularIMC() 
{
    // Pegando o peso digitado no input;
    let peso = Number.parseFloat(document.getElementById("peso").value);

    // Pegando a altura digitada no input;
    let altura = Number.parseFloat(document.getElementById("altura").value);

    // Pegando o nome digitado no input;
    let nome = document.getElementById("nome").value;

    if (!isNaN(peso) || !isNaN(altura))
    {
        let imc = Number.parseFloat(peso / (altura * altura));
        const resultado = document.getElementById("imc");

        resultado.value = imc.toFixed(2);
        const paragrafo = document.querySelector(".resultado");

        if (resultado.value < 18.5)
        {
            paragrafo.textContent = ("Abaixo do peso, " + nome);
        }
        else if (resultado.value >= 18.5 && resultado.value < 20.0)
        {
            paragrafo.textContent = ("Peso normal, " + nome);
        }
        else if (resultado.value >= 20.0 && resultado.value < 22.5)
        {
            paragrafo.textContent = ("Peso ideal, parabéns, " + nome);
        }
        else if (resultado.value >= 22.5 && resultado.value < 25.0)
        {
            paragrafo.textContent = ("Peso normal, porém cuidado, " + nome);
        }
        else if (resultado.value >= 25.0 && resultado.value < 30.0)
        {
            paragrafo.textContent = ("Cuidado! Pré-obesidade, " + nome);
        }
        else 
        {
            paragrafo.textContent = ("Obesidade, " + nome);
        }
    }
}

function limpar()
{
    // Pegando os elementos para limpar;
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const imc = document.getElementById("imc");
    const resultado = document.getElementById("resultado");

    // limpando...
    nome.value = "";
    idade.value = "";
    peso.value = "";
    altura.value = "";
    imc.value = "0";
    resultado.textContent = "";
}

// Pegando o batão de limpar dados; 
var btnLimpar = document.getElementById("limpar");

// DISPARO PARA O BOTÃO DE LIMPAR;
btnLimpar.addEventListener("click", function(event) {
    event.preventDefault();
    limpar();
})

// DISPARO PARA O BOTÃO DE ENVIAR;
btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    calcularIMC();
});
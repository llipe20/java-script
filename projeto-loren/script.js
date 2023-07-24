
var rangeC = document.getElementById("rangeC");

var btnZerar = document.getElementById("zerar");

function celsius(v) 
{
    const numberC = document.getElementById("celsius");
    numberC.value = v;
}

function fahrenheit(v)
{
    const c = parseInt(v);
    const numberF = document.getElementById("fahrenheit");
    const rangeF = document.getElementById("rangeF");
    const valor = ((c * 9/5) + 32);
    numberF.value = valor.toFixed(1);
    rangeF.value = valor;
}

function kelvin(v)
{   
    const c = parseInt(v);
    const numberK = document.getElementById("kelvin");
    const rangeK = document.getElementById("rangeK");
    const valor =  Number.parseInt(c + 273);
    numberK.value = valor;
    rangeK.value = valor;
}

rangeC.addEventListener("input", function(e) {
    e.preventDefault();
    celsius(rangeC.value);
    fahrenheit(rangeC.value);
    kelvin(rangeC.value);
})

function limpar()
{
    const numberC = document.getElementById("celsius");
    const numberF = document.getElementById("fahrenheit");
    const numberK = document.getElementById("kelvin");

    const rangeC = document.getElementById("rangeC");
    const rangeF = document.getElementById("rangeF");
    const rangeK = document.getElementById("rangeK");

    numberC.value = "0";
    numberF.value = "0";
    numberK.value = "0";
    rangeC.value = "0";
    rangeF.value = "0";
    rangeK.value = "0";
}

btnZerar.addEventListener("click",function(e) {
    e.preventDefault();
    limpar();
})


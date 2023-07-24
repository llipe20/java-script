
var btnSortear = document.getElementById("sortear");

function sortear(min, max) {
    // Verifica se o intervalo é válido
    if (min > max) 
    {
      throw new Error("O valor mínimo deve ser menor ou igual ao valor máximo.");
    }
  
    // Calcula o valor aleatório entre min (incluindo) e max (incluindo)
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return numero;
  }

function resertar()
{
    const numero = document.getElementById("valor-sorteado");
    const imagem = document.getElementById("foto");

    numero.textContent = "#";
    imagem.setAttribute("src","dado/0.png");
}
  
function modificar(valor)
{
    const numero = document.getElementById("valor-sorteado");
    const imagem = document.getElementById("foto");
    
    numero.textContent = valor;
    imagem.setAttribute("src","dado/" + valor + ".png");
}

btnSortear.addEventListener("click",function(){
    modificar(sortear(1,6));
});

 var btnResertar = document.getElementById("reserta");

btnResertar.addEventListener("click", function(){
    resertar();
})
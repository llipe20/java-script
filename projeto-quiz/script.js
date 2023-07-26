
// Habilitando o botão de iniciar;

function startQuiz()
{
    const main = document.querySelector("main");
    main.classList.remove("invisible");
    start.classList.add("invisible");
}

var start = document.getElementById("btn-start");
start.addEventListener("click", function() {
    startQuiz();
})


// Função para remover uma tarefa
function removerTarefa() {
    this.parentNode.remove();
  }
  
  // Função para concluir uma tarefa
  function concluirTarefa() {
    const tarefaCompleta = this.parentNode;
    tarefaCompleta.classList.toggle("done")
    this.classList.toggle("done");
  }
  
  // Função para salvar uma nova tarefa
  function salvarTarefa() {
    const conteudo = document.getElementById("input").value;
  
    if (conteudo) {
      const lista = document.querySelector(".row-lista");
      const novaLista = lista.cloneNode(true);
  
      novaLista.querySelector(".texto").textContent = conteudo;
      novaLista.classList.remove("invisible");
  
      const caixaLista = document.querySelector(".box-lista");
      caixaLista.appendChild(novaLista);
  
      document.getElementById("input").value = "";
  
      // Adicionar eventos aos botões da nova tarefa
      novaLista.querySelector("#btn-excluir").addEventListener("click", removerTarefa);
      novaLista.querySelector("#btn-concluir").addEventListener("click", concluirTarefa);
    }
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    salvarTarefa();
  });
  


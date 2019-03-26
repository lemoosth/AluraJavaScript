var tabela = document.querySelector("#tabela-pacientes")
tabela.addEventListener("dblclick",  function (event) {
    //escuta o duplo click e apaga o pai aos paucos
    event.target.parentNode.classList.add("fadeOut");

    //Coloca um tempo de espera para apagar 
    setTimeout (function () {
        event.target.parentNode.remove();
    }, 500) ;
});
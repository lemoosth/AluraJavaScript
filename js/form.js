var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    
    // Obtem Formulario
    var form = document.querySelector("#form-adiciona");

    //Obtem dados do Formulario (paciente)
    var paciente = obetemDadosDoFormulario(form);  

    //Montar a Tr
    var pacienteTr = montaTr(paciente);

    //Pega a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //Chama a validação do paciente
    var erro = validaPaciente(paciente);

    //Exibe erros
    if (erro.length >0) {
        exibeMensagensDeErro(erro);
        return;
    }
    
    // criar mensagens erro e limpar os erros
    var mesagensErro = document.querySelector("#mensagens-erro");
    mesagensErro.innerHTML = " ";

    //Adiciona tr a tabela
    tabela.appendChild(pacienteTr);

    //Limpar formulario
    form.reset();


});

//validaPaciente
function validaPaciente(paciente) {
    var  erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");    
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso invalido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura invalida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
        
    })
    
}

//Obtem dados do formulario
function obetemDadosDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso:  form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente    
}

//Cria td's
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
   td.textContent = dado;

   return td;
}

function montaTr(paciente) {
    //Cria tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adiciona td's a tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}
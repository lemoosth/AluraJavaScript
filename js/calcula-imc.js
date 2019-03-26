var pacientes = document.querySelectorAll(".paciente");

for (var     i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");

    var pesoEhValido  = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        imc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida ) {
        imc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc;
        imc.textContent = calculaImc(peso, altura);   
    }
}

function calculaImc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);    
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
       return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

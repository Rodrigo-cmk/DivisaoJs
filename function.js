alert("Olá!!!");

let numerador = prompt("Insira o Numerador...").trim();

let denominador = prompt("Insira o Denominador...").trim();

if (numerador == 0) {
    numerador = "0";
}

if (denominador == 0) {
    alert("Não é possível dividir por zero!!");
}
else {
    let resultado = (numerador / denominador).toFixed(2);
    let resultadoString = resultado.toString();
                        // Variável convertida a string, pois não estava sendo reconhecida

    if (resultadoString == "NaN") {
        alert("Não foi possível completar a operação, verifique o valor de entrada.");
    }

    else{
        alert(numerador + " dividido por " + denominador + " é igual a " + resultado);
    }
}
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.querySelector("#peso").value);

    altura = parseFloat(document.querySelector("#altura").value);

    imc = peso / (altura * altura);
    
    resultado = document.querySelectors('#resultado')

    if (imc < 17) {
        resultado.innerHTML = '<br> Seu resultado Foi: ' + imc + '<br> Cuidado você está muito abaixo do peso!'
    } else if (imc >=17 && imc<18.50) {
        resultado.innerHTML = '<br> Seu resultado Foi: ' + imc + '<br> você está abaixo do peso!'
    } else if (imc >= 18.50 && imc < 25) {
        resultado.innerHTML = '<br> Seu resultado Foi: ' + imc + '<br> Você está no peso ideal!'
    } else if (imc >= 25 && imc <30) {
        resultado.innerHTML = '<br> Seu resultado Foi: ' + imc + '<br> Você está acima do peso!'
    } else {
        resultado.innerHTML = '<br> Seu resultado Foi: ' + imc + '<br> Você está muito acima do peso!'
    }

    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
}
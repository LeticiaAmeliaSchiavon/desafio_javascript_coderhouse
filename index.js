let texto = prompt("Por favor, insira um texto:");

let numero = parseFloat(prompt("Por favor, insira um número:"));


if (isNaN(numero)) {
    alert("O valor inserido não é um número válido.");
} else {
    let textoConcatenado = texto + " - concatenado com número: " + numero;
    let numeroMultiplicado = numero * 2;

    console.log("Texto concatenado: " + textoConcatenado);
    console.log("Número multiplicado por 2: " + numeroMultiplicado);

    alert("Texto concatenado: " + textoConcatenado);
    alert("Número multiplicado por 2: " + numeroMultiplicado);
}

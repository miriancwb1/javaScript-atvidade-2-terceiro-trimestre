//  Função para comparar dois números
function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
        return "O primeiro número é menor que o segundo.";
    } else {
        return "Os dois números são iguais.";
    }
}

// Exemplo de uso
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
alert(compararNumeros(numero1, numero2));
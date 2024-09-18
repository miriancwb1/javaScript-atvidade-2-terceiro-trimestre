// Função para verificar se um número está dentro do intervalo de 10 a 20
function verificarIntervalo(numero) {
    if (numero >= 10 && numero <= 20) {
        return "O número está dentro do intervalo de 10 a 20.";
    } else {
        return "O número está fora do intervalo.";
    }
}

// Exemplo de uso
let numero = parseFloat(prompt("Digite um número:"));
alert(verificarIntervalo(numero));
// Função para verificar o número
function verificarNumero(numero) {
    if (numero > 0) {
        return "O número é positivo.";
    } else if (numero < 0) {
        return "O número é negativo.";
    } else {
        return "O número é zero.";
    }
}

console.log(verificarParOuImpar(7));
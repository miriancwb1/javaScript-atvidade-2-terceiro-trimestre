// Função para verificar se o número é divisível por 3 e 5
function verificarDivisibilidade(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "O número é divisível por 3 e 5.";
    } else {
        return "O número não é divisível por 3 e 5.";
    }
}

// Exemplo de uso
let numero = parseFloat(prompt("Digite um número:"));
alert(verificarDivisibilidade(numero));
// Função para verificar se é maior de idade
function verificarMaiorDeIdade(idade) {
    if (idade >= 18) {
        return "A pessoa é maior de idade.";
    } else {
        return "A pessoa é menor de idade.";
    }
}

// Exemplo de uso
let idade = parseInt(prompt("Digite a idade:"));
alert(verificarMaiorDeIdade(idade));
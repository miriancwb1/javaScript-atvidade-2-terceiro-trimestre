// Função para verificar se a pessoa tem idade para votar
function verificarIdadeParaVotar(idade) {
    if (idade >= 18) {
        return "A pessoa tem idade para votar.";
    } else {
        return "A pessoa não tem idade para votar.";
    }
}

// Exemplo de uso
let idade = parseInt(prompt("Digite a idade:"));
alert(verificarIdadeParaVotar(idade));
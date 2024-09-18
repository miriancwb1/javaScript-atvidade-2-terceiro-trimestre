// Função para verificar se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "O ano é bissexto.";
    } else {
        return "O ano não é bissexto.";
    }
}

// Exemplo de uso
let ano = parseInt(prompt("Digite um ano:"));
alert(verificarAnoBissexto(ano));
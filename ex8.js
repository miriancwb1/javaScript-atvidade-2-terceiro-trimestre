// Função para verificar se o caractere é uma vogal
function verificarVogal(caractere) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (vogais.includes(caractere)) {
        return "O caractere é uma vogal.";
    } else {
        return "O caractere não é uma vogal.";
    }
}

// Exemplo de uso
let caractere = prompt("Digite um caractere:");
alert(verificarVogal(caractere));

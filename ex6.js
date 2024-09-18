// Função para verificar se a string está vazia
function verificarStringVazia(texto) {
    if (texto === "") {
        return "A string está vazia.";
    } else {
        return "A string não está vazia.";
    }
}

// Exemplo de uso
let texto = prompt("Digite uma string:");
alert(verificarStringVazia(texto));
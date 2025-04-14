function verificarTriangulo() {
    // Solicitar os lados ao usuário
    const lados = prompt("Digite os 3 lados (a b c):").split(' ');
    
    // Converter para números
    const a = parseFloat(lados[0]);
    const b = parseFloat(lados[1]);
    const c = parseFloat(lados[2]);
    
    // Validar entradas
    if (lados.length !== 3 || isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, digite três valores numéricos separados por espaços!");
        return;
    }
    
    let mensagem;
    
    // Verificar se forma triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verificar tipo de triângulo
        if (a === b && b === c) {
            mensagem = "Triângulo Equilátero";
        } else if (a === b || b === c || a === c) {
            mensagem = "Triângulo Isósceles";
        } else {
            mensagem = "Triângulo Escaleno";
        }
    } else {
        mensagem = "Não é possível formar um triângulo";
    }
    
    // Exibir resultado
    alert(mensagem);
}

// Chamar a função para executar
verificarTriangulo();
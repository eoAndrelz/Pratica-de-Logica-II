function calcularMediaAproveitamento() {
  
    const n1 = parseFloat(prompt("Digite a nota da primeira verificação (N1):"));
    const n2 = parseFloat(prompt("Digite a nota da segunda verificação (N2):"));
    const n3 = parseFloat(prompt("Digite a nota da terceira verificação (N3):"));
    const media_exercicios = parseFloat(prompt("Digite a média dos exercícios:"));
    
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(media_exercicios)) {
        alert("Por favor, digite valores numéricos válidos para todas as notas!");
        return;
    }
    
    
    const media_aproveitamento = (n1 + n2 * 2 + n3 * 3 + media_exercicios) / 7;
    

    let conceito;
    if (media_aproveitamento >= 9.0) {
        conceito = "A";
    } else if (media_aproveitamento >= 7.5) {
        conceito = "B";
    } else if (media_aproveitamento >= 6.0) {
        conceito = "C";
    } else {
        conceito = "D";
    }
    
 
    alert(`Média de aproveitamento: ${media_aproveitamento.toFixed(2)}\nConceito: ${conceito}`);
}

calcularMediaAproveitamento();
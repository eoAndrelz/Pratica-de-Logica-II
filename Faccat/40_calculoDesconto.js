function calcularDesconto() {
  
    alert("Bem vindo ao Cálculo de Desconto");
    
    
    const produto = prompt("Digite o Nome do Produto:");
    const quantidade = parseFloat(prompt("Digite a quantidade adquirida:"));
    const preco_uni = parseFloat(prompt("Digite o Preço unitário: R$ "));
    
   
    if (isNaN(quantidade) || isNaN(preco_uni) || quantidade <= 0 || preco_uni <= 0) {
        alert("Por favor, digite valores válidos para quantidade e preço!");
        return;
    }
    
   
    const total = quantidade * preco_uni;
    let desconto = 0;
    
    if (quantidade <= 5) {
        desconto = total * 0.2; 
    } else if (quantidade > 5 && quantidade <= 10) {
        desconto = total * 0.3; 
    } else {
        desconto = total * 0.5;
    }
    

    const total_a_pagar = total - desconto;
    
   
    const mensagem = `Descrição do produto: ${produto}\n` +
                    `Total: R$ ${total.toFixed(2)}\n` +
                    `Desconto: R$ ${desconto.toFixed(2)}\n` +
                    `Total a pagar: R$ ${total_a_pagar.toFixed(2)}`;
    
    alert(mensagem);
}

calcularDesconto();
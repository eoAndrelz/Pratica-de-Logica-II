function calcularCompraFrutas() {
  
    const kg_morango = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"));
    const kg_maca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"));
    
   
    if (isNaN(kg_morango) || isNaN(kg_maca) || kg_morango < 0 || kg_maca < 0) {
        alert("Por favor, digite valores válidos para as quantidades!");
        return;
    }
    
   
    let preco_morango;
    if (kg_morango <= 5) {
        preco_morango = kg_morango * 2.50;
    } else {
        preco_morango = kg_morango * 2.20;
    }
    
   
    let preco_maca;
    if (kg_maca <= 5) {
        preco_maca = kg_maca * 1.80;
    } else {
        preco_maca = kg_maca * 1.50;
    }
    
    
    const valor_total = preco_morango + preco_maca;
    
    
    let valor_final;
    if ((kg_morango + kg_maca > 8) || (valor_total > 25)) {
        valor_final = valor_total * 0.90;
    } else {
        valor_final = valor_total;
    }
    
    
    alert(`Valor a ser pago: R$ ${valor_final.toFixed(2)}`);
}


calcularCompraFrutas();
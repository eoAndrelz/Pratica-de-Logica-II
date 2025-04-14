function calcularCombustivel() {

    const preco_gasolina = 3.90;
    const preco_alcool = 2.90;
   
    const litros = parseFloat(prompt("Digite o número de litros vendidos:"));
    const tipo_combustivel = prompt("Digite o tipo de Combustível:\nA para Álcool\nG para Gasolina").toUpperCase();
    
    let desconto = 0;
    let valor_pago = 0;
    

    if (tipo_combustivel === "A") {
        if (litros <= 20) {
            desconto = 0.03; 
        } else {
            desconto = 0.05; 
        }
        valor_pago = litros * preco_alcool * (1 - desconto);
        alert(`Valor a ser pago: R$ ${valor_pago.toFixed(2)}`);
    } 
    else if (tipo_combustivel === "G") {
        if (litros <= 20) {
            desconto = 0.04; 
        } else {
            desconto = 0.06; 
        }
        valor_pago = litros * preco_gasolina * (1 - desconto);
        alert(`Valor a ser pago: R$ ${valor_pago.toFixed(2)}`);
    } 
    else {
        alert("Tipo de combustível inválido! Digite A para álcool ou G para gasolina.");
    }
}


calcularCombustivel();
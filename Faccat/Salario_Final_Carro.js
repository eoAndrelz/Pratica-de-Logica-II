let n_carro_ven = parseInt(prompt("Digite o numero de Carros vendidos"));
let valor_ven = parseInt(prompt("Diite o valor total das vendas: R$: "));
let salario_f = parseInt(prompt("Digite o Salario Fixo: R$ "));
let  comissao= parseInt(prompt("Digite a comissão por carro vendido R$: "));

let salario_fin = salario_f + (n_carro_ven * comissao) + (valor_ven * 0.05);

alert("O salario final do vendedor é: R$ " + salario_fin);
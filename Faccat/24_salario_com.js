let salario_fixo = parseFloat(prompt("Digite o salario Fixo: R$ "))
let vendas = parseFloat(prompt("Digite o Valor das vendas: R$ "))
let comissao = parseFloat
let salario_total = parseFloat
if( vendas <= 1500){
    comissao = vendas * 0.03
} else{
    comissao = (1500 *0.03) + ((vendas -1500) *0.05)
}
salario_total = salario_fixo + comissao

alert("O salario total do vendedor é R$: " + salario_total)
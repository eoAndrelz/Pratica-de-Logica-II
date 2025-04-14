let porcent_distr = 28
let porcent_imp = 45 

let custo_fab = parseInt(prompt("Digite o custo de fabrica do Carro: R$"))

let custo_final = custo_fab + (custo_fab * (porcent_distr/100)) + (custo_fab *(porcent_imp / 100))

alert("O custo final ao consumidor é R$ " + custo_final)


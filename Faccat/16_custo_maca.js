function custo_maca(){


let qntd_m = parseInt(prompt("Digite o numero de maçãs compradas"))
let custo = parseFloat

if (qntd_m < 12){
    custo = qntd_m * 1.30
} else {
    custo = qntd_m * 1
}

alert ("O custo total de compra é: R$ "+ custo)

}
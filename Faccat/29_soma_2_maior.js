let n1 = parseFloat(prompt("Digite o 1° valor"))
let n2 = parseFloat(prompt("Digite o 2° valor"))
let n3 = parseFloat(prompt("Digite o 3° valor"))
let soma = parseFloat

if(n1 > n2){
    if(n2> n3){
        soma = n1 + n2
    } else {
        soma = n1 + n3
    }
} else {
    if(n1 > n3){
        soma = n2 + n1
    }else{
        soma = n2 + n3
    }
}

alert("A soma dos maiores valores é " + soma)
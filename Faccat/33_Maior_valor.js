let a = parseFloat(prompt("Digite o 1° valor"))
let b = parseFloat(prompt("Digite o 2° valor"))

if(a == b){
    alert("Os numeros são iguais")
} else{
    if (a>b){
        alert("O maior valor é " + a)
    } else {
        alert("O maior valor é" + b)
    }
}
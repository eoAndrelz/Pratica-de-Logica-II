let valor1 = parseFloat(prompt("Digite o 1° valor"))
let valor2 = parseFloat(prompt("Digite o 2° valor"))
let valor3 = parseFloat(prompt("Digite o 3° valor"))
let i

if(valor1 > valor2){
    i = valor1
    valor1 = valor2
    valor2 = i
}
if(valor2 > valor3){
    i = valor2
    valor2 = valor3
    valor3 = i
}
if(valor1 > valor2){
    i = valor1
    valor1 = valor2
    valor2 = i
}
alert(`Valores em ordem crescente: ${valor1}, ${valor2}, ${valor3}`);

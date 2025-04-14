let qntd_atual = parseFloat(prompt("Digite a Quantidade atual em estoque"))
let qntd_max = parseFloat(prompt("Digite a Quantidade máxima em estoque"))
let qntd_min = parseFloat(prompt("Digite a Quantidade minima em estoque"))
let qntd_media= parseFloat

qntd_media = (qntd_max + qntd_min) /2

if(qntd_atual >= qntd_media){
    alert("Não é necessario efetuar a compra")
}else {
    alert("Recomendado Efetuar a compra do produto")
}

alert("A quantidade media em estoque é" + qntd_media)
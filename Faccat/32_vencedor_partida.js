let time1 = prompt("Digite o nome do 1° Time")
let gols_time1 = parseInt(prompt("Digite o número de gols marcados pelo" + time1))
let time2 = prompt("Digite o nome do 2° Time")
let gols_time2 = parseInt(prompt("Digite o número de gols marcados pelo" + time2))

if(gols_time1 > gols_time2){
    alert("O vencedor é :" + time1)
}else{
    if(gols_time2> gols_time1){
        alert("O vencedor é" + time2)
    }else{
        alert("EMPATE")
    }
}
let horaI = parseInt(prompt("Digite a hora do Inicio do Jogo(Apenas Horas Inteiras)"))
let horaF = parseInt(prompt("Digite a hora do Fim do Jogo(Apenas Horas Inteiras)"))
let duracao = parseInt
if(horaF > horaI){
    duracao = horaF - horaI
} else {
    duracao = (24- horaI) + horaF
}
alert ("A duração do jogo foi de " + duracao + "horas")
alert("Calculo de Votos e suas percentagens")
let total = parseInt(prompt("Digite o numero total de Eleitores"))
let brancos = parseInt(prompt("Digite o numero de votos brancos"))
let nulos = parseInt(prompt("Digite o numero total de Votos nulos"))
let validos = parseInt(prompt("Digite o numero total de Votos válidos"))

let perc_bran = (brancos / total) * 100
let perc_nul = (nulos / total) * 100
let perc_valid = (validos / total) * 100

alert("O percentual de votos brancos" + perc_bran+ "%")
alert("O percentual de votos nulos" + perc_nul + "%")
alert("O percentual de votos válidos" + perc_valid + "%")
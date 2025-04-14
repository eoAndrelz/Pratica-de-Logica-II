let nome = prompt("Digite o Nome")
let altura = parseFloat(prompt("Digite a Altura: "))
let sexo = prompt("Digie o sexo (M ou F)")
let peso_ideal = parseFloat
sexo = sexo.toUpperCase

if (sexo = "M"){
    peso_ideal = (72.7 * altura) - 58;
} else {
    peso_ideal = (62.1 * altura) - 44.7
}

alert("O peso ideial de" + nome + "é" + peso_ideal)
let n1 = parseInt(prompt("Digite a 1° nota do aluno"))
let n2 = parseInt(prompt("Digite a 2° nota do aluno"))

let media = (n1 + n2) / 2

if (media >=6){
    alert("O aluno foi aprovado com a média:" + media)
} else {
    alert("O aluno foi reprovado com a média:" + media)
}
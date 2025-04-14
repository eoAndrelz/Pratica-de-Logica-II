let ano_a = parseInt(prompt("Digite o ano Atual :"))
let ano_nasc = parseInt(prompt("Digite o ano de Nascimento :"))

let idade = ano_a - ano_nasc

if(idade >=16){
    alert("A pessoa pode votar este ano")
} else {
    alert("A Pessoa não pode votar este ano")
}

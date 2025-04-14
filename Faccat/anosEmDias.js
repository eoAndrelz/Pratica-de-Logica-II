alert("Bem vindo ao Calculo de Dias");
let anos = parseInt(prompt("Digite a sua idade:"));
let meses = parseInt(prompt("Digite os Meses desde o seu aniversario"))
let dias = parseInt(prompt("Digite os dias desde o seu MêsVersario"))

idade = (anos * 365) + (meses * 30) + dias

alert("A idade Total em Dias é" + idade)
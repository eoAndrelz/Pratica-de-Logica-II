let numero_conta = prompt("Digite o número da conta");
let saldo = parseFloat(prompt("Digite o Saldo R$: "));
let debito = parseFloat(prompt("Digite o Debito:  R$"));
let credito = parseFloat(prompt("Digite o Credito:  R$"));
let saldo_atual;

saldo_atual = saldo - debito + credito

if (saldo_atual >= 0){
    alert("Saldo Positivo")
} else{
    alert("Saldo Negativo")
}

alert("O saldo atual da conta" + numero_conta+ "é:  R$" + saldo_atual)
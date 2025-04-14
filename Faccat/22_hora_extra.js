let hora_t = parseInt(prompt("Digite o numero de Horas Trabalhadas no Mês"))
let sala_hr = parseInt(prompt("Digite o salario por hora: R$: "))
let sala_total = parseInt
let hora_ext = parseInt

if (hora_t > 40*4){
    hora_ext = hora_t - (40*4)
    sala_total= (40*4*sala_hr) + ( hora_ext * sala_hr *1.5) 
}else {
    sala_total = hora_t * sala_hr
}

alert("O salario total do funcionario é R$" + sala_total)
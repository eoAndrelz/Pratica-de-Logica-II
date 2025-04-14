let x = parseFloat(prompt("Digite o Valor de X"));
let y = parseFloat(prompt("Digite o Valor de Y"));
let z 
let resposta
z= (x*y) + 5

if(z<=0){
    resposta = "A"
}else{
    if (z <=100){
        resposta = "B"
    } else{
        resposta = "C"
    }
};

alert ("Z =" + z);
alert("Resposta: " + resposta);
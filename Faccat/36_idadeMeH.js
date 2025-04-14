function calcularIdades() {
  
    const idade_homem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
    const idade_homem2 = parseInt(prompt("Digite a idade do segundo homem:"));
    const idade_mulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
    const idade_mulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));
    
   
    let homemV, homemN;
    if (idade_homem1 > idade_homem2) {
        homemV = idade_homem1;
        homemN = idade_homem2;
    } else {
        homemV = idade_homem2;
        homemN = idade_homem1;
    }
    
    
    let mulherV, mulherN;
    if (idade_mulher1 > idade_mulher2) {
        mulherV = idade_mulher1;
        mulherN = idade_mulher2;
    } else {
        mulherV = idade_mulher2;
        mulherN = idade_mulher1;
    }
    
   
    const soma_idades = homemV + mulherN;
    const produtos_idades = homemN * mulherV;
    
    
    alert(`A soma das idades do homem mais velho com a mulher mais nova é: ${soma_idades}\n` +
          `O produto das idades do homem mais novo com a mulher mais velha é: ${produtos_idades}`);
}

calcularIdades();
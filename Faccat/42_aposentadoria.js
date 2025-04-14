function verificarAposentadoria() {

    const codigo_empregado = prompt("Digite o código do empregado:");
    const ano_nascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
    const ano_ingresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
    const ano_atual = parseInt(prompt("Digite o ano atual:"));
    
    if (isNaN(ano_nascimento) || isNaN(ano_ingresso) || isNaN(ano_atual)) {
        alert("Por favor, digite anos válidos!");
        return;
    }
    
    const idade = ano_atual - ano_nascimento;
    const tempo_trabalho = ano_atual - ano_ingresso;
    
    alert(`Código do empregado: ${codigo_empregado}\n` +
          `Idade: ${idade} anos\n` +
          `Tempo de trabalho: ${tempo_trabalho} anos`);
    
    if (idade >= 65 || tempo_trabalho >= 30 || (idade >= 60 && tempo_trabalho >= 25)) {
        alert("Requerer aposentadoria");
    } else {
        alert("Não requerer aposentadoria");
    }
}

verificarAposentadoria();
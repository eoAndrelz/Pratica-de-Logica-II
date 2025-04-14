function verificarAcesso() {
    const codigoC = 1234;
    const senhaC = 9999;
    
    
    const codigo = parseInt(prompt("Digite o código do Usuário:"));
    
    if (codigo === codigoC) {
       
        const senha = parseInt(prompt("Digite a senha:"));
        
        if (senha === senhaC) {
            alert("Acesso permitido, Bem vindo!");
        } else {
            alert("Senha Incorreta");
        }
    } else {
        alert("Usuário inválido");
    }
}


verificarAcesso();
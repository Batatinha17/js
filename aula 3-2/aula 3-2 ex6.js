// Código para verificar se a senha é forte
prompt = require('prompt-sync')()
const senha = prompt("Digite a senha: ");
    
if (senha.length < 8) {
      console.log("A senha deve ter pelo menos 8 caracteres.")
    }
    if (!/[A-Z]/.test(senha)) {
      console.log("A senha deve conter pelo menos uma letra maiúscula.")
    }
    if (!/[a-z]/.test(senha)) {
      console.log("A senha deve conter pelo menos uma letra minúscula.")
    }
    if (!/\d/.test(senha)) {
      console.log("A senha deve conter pelo menos um número.")
    }
    if (!/[^a-zA-Z0-9]/.test(senha)) {
      console.log("A senha deve conter pelo menos um caractere especial.")
    }
function validateForm() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se os campos estão preenchidos
    if (nome == "" || email == "" || telefone == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verificar se o e-mail é válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Verificar se o telefone é válido
    var telefonePattern = /^\d{11}$/; // so aceita enviar ser tiver 11 dígitos
    if (!telefonePattern.test(telefone)) {
        alert("Por favor, insira um Telefone válido de 11 digitos.");
        return false;
    }

    // Se tudo estiver correto, exibir a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";
    
    // Limpar o formulário
    document.getElementById("contactForm").reset();
    
    // Impedir o envio do formulário (para fins de demonstração)
    return false;
}
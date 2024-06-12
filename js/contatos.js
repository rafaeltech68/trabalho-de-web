function validateForm() {
    // Obter os valores dos campos do formulario
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se todos os campos estao preenchidos ou nao
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } else {
        // Se todos os campos estao preenchidos, ai verificar ser o email ta correto
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false;
        } else {
            // Se o email for valido, verificar ser o e valido telefone
            var telefonePattern = /^\d{11}$/; // ter q ter 11 dígitos
            if (!telefonePattern.test(telefone)) {
                alert("Por favor, insira um Telefone válido com 11 dígitos.");
                return false;
            } else {
                // Se o telefone eo email e valido, executar as ações de sucesso
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
                // Impedir o envio do formulario
                return false;
            }
        }
    }
}

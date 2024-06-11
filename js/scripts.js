// Define o índice inicial do slide
let slideIndex = 1;
let timer; // Variável para armazenar o timer
showSlides(slideIndex); // Mostra a foto inicial 

// Função para passar ou voltar as fotos
function plusSlides(n) {
    clearTimeout(timer); // Limpa o timer atual da modo altomatico
    showSlides(slideIndex += n); // Atualiza a foto atual para o proximo
}

// Função para ir para um slide específico
function currentSlide(n) {
    clearTimeout(timer); // Limpa o timer atual
    showSlides(slideIndex = n); // Atualiza o slide atual
}

// Função principal para mostrar os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Coleta todos os elementos com a classe "mySlides"
    let dots = document.getElementsByClassName("dot"); // Coleta todos os elementos com a classe "dot"
    
    // Se o índice do slide é maior que o número de slides, volta para o primeiro slide
    // ser vc aperta pra direita ate o final e pula pra primeira foto
    if (n > slides.length) { 
        slideIndex = 1; 
    }
    
    // Se o índice do slide é menor que 1, vai para o último slide
    // ja aki ele pula da esquerda pra ultima dando a impresao de ser um carrosel
    if (n < 1) { 
        slideIndex = slides.length; 
    }
    
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove a classe "active" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostra o slide atual e adiciona a classe "active" ao ponto correspondente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Configura o tempo para mudar as fotos a cada 3,5 segundos
    timer = setTimeout(() => showSlides(slideIndex += 1), 3500);
}

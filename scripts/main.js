// Função para alternar entre as abas de projetos
function showTab(tabName) {
    // Esconder todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remover classe active de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar a aba selecionada
    document.getElementById(tabName).classList.add('active');
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
}

// Opcional: Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar qualquer funcionalidade adicional aqui
    console.log('Portfólio carregado com sucesso!');
});

// Opcional: Animação ao carregar a página
window.addEventListener('load', function() {
    // Adicionar classe de animação se necessário
    document.body.classList.add('loaded');
});
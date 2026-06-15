// Common JavaScript for PassoSeguro

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alterna as classes que exibem ou escondem o menu
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Lógica para trocar o ícone de Menu para X (Fechar)
            const iconElement = mobileMenuBtn.querySelector('i');
            const isMenuOpen = mobileMenu.classList.contains('flex');
            
            if (isMenuOpen) {
                iconElement.setAttribute('data-lucide', 'x');
            } else {
                iconElement.setAttribute('data-lucide', 'menu');
            }
            
            // Recria o ícone atualizado
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    }

    // Initialize Lucide Icons if not already done in the page
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Utility to format dates or other common tasks
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
}

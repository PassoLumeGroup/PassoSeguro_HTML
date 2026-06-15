// Common JavaScript for PassoSeguro

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // In a real static version, we might want a mobile menu overlay
            // For this prototype, we'll just log or show a simple alert if needed
            // But let's try to implement a simple toggle if the nav exists
            console.log('Mobile menu clicked');
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

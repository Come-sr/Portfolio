function toggleSection(header) {
    // Toggle la classe active sur le header
    header.classList.toggle('active');
    
    // Trouve la section de contenu suivante
    const content = header.nextElementSibling;
    
    // Toggle la classe active sur le contenu
    content.classList.toggle('active');
    
    // Met à jour l'icône
    const icon = header.querySelector('.toggle-icon');
    icon.textContent = header.classList.contains('active') ? '▲' : '▼';
}

// Ouvre toutes les sections au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        header.classList.add('active');
        header.nextElementSibling.classList.add('active');
        header.querySelector('.toggle-icon').textContent = '▲';
    });
});
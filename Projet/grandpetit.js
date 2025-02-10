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
  
  // Ferme toutes les sections au chargement de la page
  document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
      header.classList.remove('active'); // Remove active class
      header.nextElementSibling.classList.remove('active'); // Collapse content
      header.querySelector('.toggle-icon').textContent = '▼'; // Set icon to down arrow
    });
  });
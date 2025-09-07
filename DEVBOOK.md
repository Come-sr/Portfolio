# Portfolio Devbook

## Overview
This document serves as a comprehensive guide to the design, structure, and evolution of the portfolio website.

## Evolution Timeline

### Initial Implementation
- Space-themed portfolio with animated stars
- Basic navigation structure
- Initial project showcase

### Major Redesign (Glassmorphism Theme)
- Implemented complete Glassmorphism Modern theme
- Added glass cards with backdrop-filter blur
- Gradient backgrounds and smooth animations
- Responsive design with mobile-first approach
- Interactive elements and micro-interactions

### Content Restructuring
- Removed About section
- Transformed Experience to "Parcours Scolaire"
- Updated educational timeline:
  - BAC +3 - Licence Administrateur d'Infrastructures Sécurisées (Hésias, 2024-Présent)
  - BTS SIO - Services Informatiques aux Organisations (2021-2023)
  - BAC Pro - Systèmes Numériques (2018-2021)

### Project Showcase
1. **Projet Alternance 1**
   - Links to Projet/Alternance/ALT1.HTML
   - Links to Projet/Projet.html

2. **Projet Alternance 2**
   - Links to Projet/Alternance/ALT2.HTML
   - Links to Exp/exp.html

3. **Docker Infrastructure**
   - BTS SIO practical exam project
   - Links to Perso/Perso.html and Veille/Veille.html
   - Includes:
     - Proxmox
     - Docker containers (Portainer, Wikijs, Stirling-PDF, n-tools, Dozzle, Nginx)

## Technical Implementation

### Key Features
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance Optimizations**:
  - Optimized animations
  - Lazy loading of images
  - Efficient CSS with variables
- **Accessibility**:
  - Semantic HTML5
  - ARIA labels
  - Keyboard navigation support
- **Interactive Elements**:
  - Smooth scrolling
  - Animated skill bars
  - Hover effects
  - Parallax scrolling

### File Structure
```
Portfolio/
├── BtsSio/           # BTS SIO section
├── Exp/              # Experience section
├── Perso/            # Personal section
├── Projet/           # Projects showcase
│   ├── Alternance/   # Apprenticeship projects
│   └── MissionAP/    # AP mission projects
├── Veille/           # Technology watch
├── index.html        # Main landing page
├── hom.html          # Services portal
├── styles.css        # Main styles
├── script.js         # Main JavaScript
└── global.css        # Global styles
```

### Design System
- **Color Palette**:
  - Primary: Deep space blue (#0f1624)
  - Secondary: Electric blue (#00f3ff)
  - Accent: Neon purple (#b721ff)
  - Text: White with varying opacity
- **Typography**:
  - Headings: 'Orbitron', sans-serif
  - Body: 'Poppins', sans-serif
- **Spacing**:
  - Base unit: 8px
  - Consistent vertical rhythm

## Current Status
- **Last Major Update**: September 2024
- **Current Focus**: Cybersecurity and infrastructure showcase
- **Status**: In alternance at Pôle Universitaire de Vichy

## Future Enhancements
- [ ] Add dark/light theme toggle
- [ ] Implement project filtering system
- [ ] Add blog section for technical articles
- [ ] Improve loading performance
- [ ] Add more interactive 3D elements

## Maintenance Notes
- All external links should be checked periodically
- Update project showcase as new projects are completed
- Keep dependencies up to date
- Regular accessibility audits recommended

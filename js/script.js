// Sample project data
const projects = [
    {
        title: "Vintage Computing Timeline",
        description: "Interactive timeline of important milestones in computing history from 1930s to 1990s.",
        tags: ["JavaScript", "TimelineJS", "History"],
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Tangent App",
        description: "AI powered desktop application for managing personal knowledge, tasks, and notes.",
        tags: ["Research", "SQL", "NoSQL"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Tech Management Case Studies",
        description: "Collection of case studies analyzing technology adoption in organizations.",
        tags: ["Case Studies", "Management"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Load projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Mobile menu toggle (to be implemented)
    // You can expand this to add mobile menu functionality
});

// Add this to your existing script.js file

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        let theme;
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            theme = 'light';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        if (!localStorage.getItem('theme')) { // Only if no manual preference set
            if (newTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
            } else {
                document.body.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
            }
        }
    });
});
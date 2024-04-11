document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const projects = document.querySelectorAll('.project');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            showAllProjects();
        } else {
            filterProjects(searchTerm);
        }
    });

    function filterProjects(searchTerm) {
        projects.forEach(project => {
            const title = project.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function showAllProjects() {
        projects.forEach(project => {
            project.style.display = 'block';
        });
    }
});

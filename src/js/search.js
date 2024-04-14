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
            const description = project.querySelector('.description').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden')
            }
        });
    }

    function showAllProjects() {
        projects.forEach(project => {
            project.classList.remove('hidden');
        });
    }
});
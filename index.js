const navItems = document.querySelectorAll('.nav-items a');
const headers = document.querySelectorAll('.nav-items h1');
const sections = document.querySelectorAll('.individual-section');

function showSection(targetId) {
    sections.forEach(section => {
        section.classList.add('hidden'); // Hide all sections
    });
    document.getElementById(targetId).classList.remove('hidden'); // Show the target section
}

// Combine functionality into a single event listener
navItems.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all headers
        headers.forEach(header => {
            header.classList.remove('active');
        });

        // Add 'active' class to the corresponding header
        headers[index].classList.add('active');

        // Use href to get the target section ID
        const targetId = this.getAttribute('href').substring(1); // Extract ID without '#'

        // Show the corresponding section
        showSection(targetId);
    });
});

// Show the default section when the page loads
showSection('landing');
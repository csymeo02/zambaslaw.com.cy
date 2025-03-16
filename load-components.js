document.addEventListener('DOMContentLoaded', function() {
    // Load the header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-container').innerHTML = '<p>Error loading header</p>';
        });

    // Load the footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-container').innerHTML = '<p>Error loading footer</p>';
        });
});
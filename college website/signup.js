document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('signupForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Optionally, perform form validation here
        
        // Redirect to index.html
        window.location.href = 'idex.html';
    });
});

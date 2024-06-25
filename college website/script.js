document.addEventListener('DOMContentLoaded', function() {
    // Function to handle PDF upload and display
    function handlePDFUpload(pdfType, courseName) {
        // Simulate uploading and displaying PDF content
        // Replace with actual logic to handle file upload and display
        var pdfContent = `Sample ${pdfType} PDF content for ${courseName}.`;
        return pdfContent;
    }

    // Event listener for Mid Sem 1 buttons
    var midSem1Buttons = document.querySelectorAll('.btn-mid-sem-1');
    midSem1Buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var courseName = button.closest('.card-body').querySelector('.card-title').textContent.trim();
            console.log('Clicked on Mid Sem 1 for:', courseName);

            // Call function to handle PDF upload and display
            var pdfContent = handlePDFUpload('Mid Sem 1', courseName);

            // Display PDF content in modal or other section
            displayPDFContent(courseName, 'Mid Sem 1', pdfContent);
        });
    });

    // Event listener for Mid Sem 2 buttons
    var midSem2Buttons = document.querySelectorAll('.btn-mid-sem-2');
    midSem2Buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var courseName = button.closest('.card-body').querySelector('.card-title').textContent.trim();
            console.log('Clicked on Mid Sem 2 for:', courseName);

            // Call function to handle PDF upload and display
            var pdfContent = handlePDFUpload('Mid Sem 2', courseName);

            // Display PDF content in modal or other section
            displayPDFContent(courseName, 'Mid Sem 2', pdfContent);
        });
    });

    // Event listener for End Sem (PYQ) buttons
    var pyqButtons = document.querySelectorAll('.btn-pyq');
    pyqButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var courseName = button.closest('.card-body').querySelector('.card-title').textContent.trim();
            console.log('Clicked on PYQ for:', courseName);

            // Simulate loading PYQ papers dynamically
            var pyqContent = `Past Year Questions for ${courseName}:
            - Question 1
            - Question 2
            - Question 3
            `;
            
            // Display PYQ content in modal or other section
            displayPDFContent(courseName, 'End Sem (PYQ)', pyqContent);
        });
    });

    // Function to display PDF content in modal or other section
    function displayPDFContent(courseName, pdfType, content) {
        // Modify modal or section elements to display the PDF content
        var modalTitle = document.querySelector('.modal-title');
        var modalBody = document.querySelector('.modal-body');
        var pyqCourseName = document.querySelector('#pyqCourseName');

        pyqCourseName.textContent = courseName;
        modalTitle.textContent = `${pdfType} for ${courseName}`;
        modalBody.textContent = content;

        // Show the modal or section
        var pyqModal = document.querySelector('#pyqModal');
        $(pyqModal).modal('show');
    }
});

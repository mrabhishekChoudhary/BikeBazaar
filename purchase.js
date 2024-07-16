document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    const floatingWindow = document.querySelector('.floating-window');
    const contactUsLink = document.getElementById('contactUsLink');
    const contactFormWindow = document.querySelector('.floating-window.contact-form');
    const successMessageWindow = document.querySelector('.floating-window.success-message');
    const closeButtonContactForm = document.querySelector('.floating-window.contact-form .btn-close');
    const contactForm = document.getElementById('contactForm');
    // Add click event listeners to all "Buy Now" buttons
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Show the floating window
            floatingWindow.style.display = 'block';
        });
    });

    // Add click event listener to the close button within the floating window
    const closeButton = document.querySelector('.floating-content .btn-close');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            // Hide the floating window
            floatingWindow.style.display = 'none';
        });
    }
    if (contactUsLink) {
        contactUsLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            contactFormWindow.style.display = 'block';
        });
    }
    if (closeButtonContactForm) {
        closeButtonContactForm.addEventListener('click', function () {
            contactFormWindow.style.display = 'none';
        });
    }
    
    const closeButton1 = document.querySelector('.modal-footer .btn-secondary');
    if (closeButton1) {
        closeButton1.addEventListener('click', function () {
            // Hide the floating window
            floatingWindow.style.display = 'none';
        });
    }
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            // Show success message window
            successMessageWindow.style.display = 'block';
            // Optionally, reset the form
            contactForm.reset();
            // Close the contact form window
            contactFormWindow.style.display = 'none';
        });
    }

    // Add click event listener to close success message window
    const closeButtonSuccess = document.querySelector('.floating-window.success-message .btn-close');
    if (closeButtonSuccess) {
        closeButtonSuccess.addEventListener('click', function () {
            successMessageWindow.style.display = 'none';
        });
    }
});


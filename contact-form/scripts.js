document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let consent = document.getElementById('consent').checked;
    let inquiryType = document.querySelector('input[name="inquiryType"]:checked');

    if (firstName === '' || lastName === '') {
        alert('Please enter your first and last name.');
        return;
    }

    if (!inquiryType) {
        alert('Please select an inquiry type.');
        return;
    }

    if (email === '') {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter your message.');
        return;
    }

    if (!consent) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    alert('Form submitted successfully!');
    this.submit();
});

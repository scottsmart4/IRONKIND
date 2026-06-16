const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

// Google Apps Script deployment URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzCZfU9-kTl5lwr5FGfqqQ41v1HhqzYJqaU0Xnb3A5ufcuE6T7Qe1xmJZybbVVPwNxJ/exec';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        showMessage('Please enter an email address.', 'error');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('email', email);

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        });

        showMessage('Thanks! Check your email for your 20% off code.', 'success');
        emailInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        showMessage('Unable to submit. Please try again.', 'error');
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    if (type === 'success') {
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    }
}

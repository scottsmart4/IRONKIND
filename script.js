const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

// Google Apps Script deployment URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWZPUADZXghhj7VBqdXSTAXoTY5glfiJju7Tq9Vi2OeiEOiA-3joxCUTM1squADVz4mQ/exec';

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

        showMessage('Success! We will send your code to you when we launch.', 'success');
        emailInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        showMessage('Unable to submit. Please try again.', 'error');
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

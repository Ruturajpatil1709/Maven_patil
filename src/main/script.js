// script.js
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const eventName = document.getElementById('eventName').value;
    if (eventName.trim() === '') {
        event.preventDefault();
        alert('Event Name cannot be empty');
    }
});

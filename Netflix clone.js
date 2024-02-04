document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Signed in as ${email}`);
});

document.getElementById('add-show-btn').addEventListener('click', function() {
    const showName = prompt('Enter the name of the show you want to add:');
    if (showName) {
        const showElement = document.createElement('li');
        showElement.textContent = showName;
        document.getElementById('shows-list').appendChild(showElement);
    }
});

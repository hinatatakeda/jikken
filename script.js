
function checkPassword() {
    // Use the 'correctPassword' variable from the external configuration
    var enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        // Show the protected content
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        // Display an error message
        alert('Incorrect password. Please try again.');
    }
}

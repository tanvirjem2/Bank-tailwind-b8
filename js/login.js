document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;

    const password = document.getElementById('user-password').value;

    if (email === 'tanvir@gmail.com' && password === '1234') {
        window.location.href = 'bank.html'
    } else {
        alert('Invalid user');
    }
})
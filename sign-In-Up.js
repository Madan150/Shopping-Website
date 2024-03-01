function signIn() {
    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Sign In Successful!');
        window.location.href = 'index.html';
        // Add your logic to redirect or perform additional actions after sign-in
    } else {
        alert('Invalid username or password');
    }
}

function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (username.trim() === "" || password.trim() === "") {
        alert("username and password must not be empty")
    }
    // Check if the username is already taken
    else if(users.some(u => u.username === username)) {
        alert('Username already taken. Please choose another.');
        return;
    }
    // Add the new user to the local storage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign Up Successful! You can now sign in.');
    toggleForm(); // Switch to the sign-in form after signing up
}
function toggleForm() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const toggleText = document.getElementById('toggleText');

    if (signInForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        toggleText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Sign Up</a>";
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Sign In</a>';
    }
}


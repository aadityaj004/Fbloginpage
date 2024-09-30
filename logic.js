// Get the input fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get the login button
const loginButton = document.getElementById('login-button');

// Add an event listener to the login button
loginButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Check if the input values are not empty
  if (email && password) {
    // Log the input values to the console (for demo purposes only)
    console.log(`Email: ${email}, Password: ${password}`);

    // You can add your own logic here to authenticate the user
    // For example, you can make an AJAX request to a server-side API
    // to verify the user credentials
  } else {
    alert('Please enter both email and password');
  }
});
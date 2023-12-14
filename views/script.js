console.log("script on");
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById('errorMessage').textContent = '';
  
    // Show loader in the signup button
    document.getElementById('signupButton').innerHTML = 'Signing Up...';
  
    // Get form data
    const formData = new FormData(this);
  
    // Make the API call using fetch
    fetch('/signup-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      return response.json();
    })
    .then(data => {
      // Reset the signup button text
      document.getElementById('signupButton').innerHTML = 'SIGN UP';
  
      // Handle successful signup response
      console.log('Signup successful:', data);
      // Optionally, you can redirect the user to a success page or perform other actions
    })
    .catch(error => {
      // Reset the signup button text
      document.getElementById('signupButton').innerHTML = 'SIGN UP';
  
      // Display the error message
      document.getElementById('errorMessage').textContent = 'Signup failed. Please try again.';
  
      console.error('Signup error:', error);
    });
  });
  
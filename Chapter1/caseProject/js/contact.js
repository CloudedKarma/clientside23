// Theme toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Form validation and submission
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const options = document.getElementsByName('options');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
const selectedOptions = [];

// Function to validate and submit the form
const validate = (e) => {
  e.preventDefault(); // prevent default form submission behavior

  // Validate name input
  if (name.value.length < 3) {
    errorElement.innerHTML = "Your name should be at least 3 characters long.";
    return false;
  } 
  
  // Validate email input
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 
  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  // Validate message input
  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  // Loop through the options and add any selected ones to the selectedOptions array
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOptions.push(options[i].value);
    } else {
      const index = selectedOptions.indexOf(options[i].value);
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
    }
  }

  // Convert the selectedOptions array to a string
  const selectedOptionsString = selectedOptions.join(', ');

  // Display success message
  errorElement.innerHTML = '';
  successMsg.innerHTML = `Thank you! You selected: ${selectedOptionsString}. I will get back to you as soon as possible.`;

  // Reset the form after a delay
  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
    selectedOptions.length = 0; // Reset the selectedOptions array
  }, 6000);

  return true;
}

// Function to validate email input
const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Add event listener to submit button
submitBtn.addEventListener('click', validate);

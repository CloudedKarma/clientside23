const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const options = document.getElementById('options');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
const selectedOptions = [];

const validate = (e) => {
  e.preventDefault();

  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  }

  if (!email.value.includes('.') || !email.value.includes('@')) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  selectedOptions.length = 0;

  for (let i = 0; i < options.options.length; i++) {
    if (options.options[i].selected) {
      selectedOptions.push(options.options[i].value);
    }
  }

  if (selectedOptions.length === 0) {
    errorElement.innerHTML = 'Please select at least one option.';
    return false;
  }

  submitBtn.disabled = true;

  fetch('https://example.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
      options: selectedOptions
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        successMsg.innerHTML = 'Your message has been sent!';
        contactForm.reset();
      } else {
        errorElement.innerHTML = 'Something went wrong. Please try again later.';
      }
      submitBtn.disabled = false;
    })
    .catch(error => {
      errorElement.innerHTML = 'Something went wrong. Please try again later.';
      submitBtn.disabled = false;
    });
};

contactForm.addEventListener('submit', validate);

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

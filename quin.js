

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  });

  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return false;
    }

    return true;
  }




  
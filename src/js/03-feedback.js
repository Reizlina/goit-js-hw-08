import throttle from 'lodash.throttle';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactForm = document.querySelector('.feedback-form');
const formData = {};

const fillContactForm = form => {
  const formDataFromLocalSorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
  const formElements = form.elements;

  for (const key in formDataFromLocalSorage) {
    if (formDataFromLocalSorage.hasOwnProperty(key)) {
      formElements[key].value = formDataFromLocalSorage[key];
    }
  }
};

fillContactForm(contactForm);

const onContactFormChange = throttle(event => {
  const { target } = event;

  const contactFormValue = target.value;
  const contactFormValueName = target.name;

  formData[contactFormValueName] = contactFormValue;
  localStorage.setItem('formData', JSON.stringify(formData));
}, 500);

// !_____________________
const submitFunc = event => {
  event.preventDefault();
  const { email, message } = event.target;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const obj = {
    email: contactForm.email.value,
    message: contactForm.message.value,
  };

  console.log(obj);
  event.currentTarget.reset();
  localStorage.removeItem('formData');
};

contactForm.addEventListener('submit', submitFunc);
contactForm.addEventListener('input', onContactFormChange);

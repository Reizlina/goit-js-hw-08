const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
import throttle from 'lodash.throttle';
const contactForm = document.querySelector('.feedback-form');
const formData = {};

// const fillContactForm = form => {
const formDataFromLocalSorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
const formElements = contactForm.elements;

console.log(formDataFromLocalSorage);
console.dir(formElements);

for (const key in formDataFromLocalSorage) {
  if (formDataFromLocalSorage.hasOwnProperty(key)) {
    formElements[key].value = formDataFromLocalSorage[key];
  }
}
// };

// fillContactForm();

const onContactFormChange = throttle(event => {
  const { target } = event;

  const contactFormValue = target.value;
  const contactFormValueName = target.name;

  formData[contactFormValueName] = contactFormValue;
  localStorage.setItem('formData', JSON.stringify(formData));
}, 500);

contactForm.addEventListener('input', onContactFormChange);

// const formElements = form.elements;

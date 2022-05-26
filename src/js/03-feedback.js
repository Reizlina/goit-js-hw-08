const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactForm = document.querySelector('.feedback-form');
const formData = {};

const fillContactForm = form => {
  const formDataFromLocalSorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
  const formElements = form.elements;
  console.log(formDataFromLocalSorage);
  console.dir(formElements);
  for (const key in formDataFromLocalSorage) {
    if (formDataFromLocalSorage.hasOwnProperty(key)) {
      formElements[key].value = formDataFromLocalSorage[key];
    }
  }
};

// fillContactForm();

const onContactFormChange = event => {
  const { target } = event;

  const contactFormValue = target.value;
  const contactFormValueName = target.name;

  formData[contactFormValueName] = contactFormValue;
  localStorage.setItem('formData', JSON.stringify(formData));
};

contactForm.addEventListener('change', onContactFormChange);

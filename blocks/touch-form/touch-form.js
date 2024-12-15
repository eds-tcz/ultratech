const block = document.querySelector('.touch-form');
const categoryToSubcategory = {
  'Choose Your Category': ['Choose Category'],
  'Option 1': ['Sub Option 1', 'Sub Option 2', 'Sub Option 3'],
  'Option 2': ['Sub Option A', 'Sub Option B', 'Sub Option C'],
  'Option 3': ['Sub Option X', 'Sub Option Y', 'Sub Option Z'],
  'Option 4': ['Sub Option I', 'Sub Option II', 'Sub Option III']
};

// Create the form fields
const fullNameField = createFormField('Full Name', 'text', 'full-name');
const mobileNumberField = createFormField('Mobile Number', 'tel', 'mobile-number');
const pinCodeField = createFormField('Pin code', 'text', 'pin-code');
const categoryField = createSelectField('Choose Category', 'category', [
  'Choose Your Category',
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4'
]);
const subCategoryField = createSelectField('Choose Sub Category', 'sub-category', [
  'Choose Category'
]);
const authorizeCheckbox = createCheckboxField('By submitting this form you are authorizing UltraTech Cement to contact you.');
const submitButton = createSubmitButton('Submit');

// Create a wrapper to group fields
const formRow1 = document.createElement('div');
formRow1.classList.add('form-row');
const formRow2 = document.createElement('div');
formRow2.classList.add('form-row');

// Append the form fields to the appropriate rows
formRow1.appendChild(mobileNumberField);
formRow1.appendChild(pinCodeField);

formRow2.appendChild(categoryField);
formRow2.appendChild(subCategoryField);

block.appendChild(fullNameField);
block.appendChild(formRow1);
block.appendChild(formRow2);
block.appendChild(authorizeCheckbox);
block.appendChild(submitButton);

// Create the form fields
function createFormField(label, type, name) {
  const fieldContainer = document.createElement('div');
  fieldContainer.classList.add('form-field-container');

  const labelElement = document.createElement('label');
  labelElement.textContent = label;

  const inputField = document.createElement('input');
  inputField.type = type;
  inputField.name = name;
  inputField.classList.add('form-field');

  fieldContainer.appendChild(labelElement);
  fieldContainer.appendChild(inputField);

  inputField.addEventListener('input', handleFieldInput);

  return fieldContainer;
}

function createSelectField(label, name, options) {
  const fieldContainer = document.createElement('div');
  fieldContainer.classList.add('form-field-container');

  const labelElement = document.createElement('label');
  labelElement.textContent = label;

  const selectField = document.createElement('select');
  selectField.name = name;
  selectField.classList.add('form-field');

  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.toLowerCase().replace(/ /g, '-');
    optionElement.textContent = option;
    selectField.appendChild(optionElement);
  });

  fieldContainer.appendChild(labelElement);
  fieldContainer.appendChild(selectField);

  // Add event listener for dynamic subcategory updates
  if (name === 'category') {
    selectField.addEventListener('change', function(event) {
      const selectedCategory = event.target.value;
      updateSubcategories(selectedCategory);
    });
  }

  selectField.addEventListener('change', handleFieldInput);

  return fieldContainer;
}

// Function to update subcategories based on selected category
function updateSubcategories(selectedCategory) {
  const subCategorySelect = document.querySelector('select[name="sub-category"]');
  
  // Clear existing options
  subCategorySelect.innerHTML = '';

  // Get the original category name (not lowercase)
  const originalCategory = Object.keys(categoryToSubcategory).find(
    key => key.toLowerCase().replace(/ /g, '-') === selectedCategory
  );

  // Get subcategories for the selected category
  const subcategories = categoryToSubcategory[originalCategory] || ['Choose Category'];

  // Populate subcategory dropdown
  subcategories.forEach((subcategory) => {
    const optionElement = document.createElement('option');
    optionElement.value = subcategory.toLowerCase().replace(/ /g, '-');
    optionElement.textContent = subcategory;
    subCategorySelect.appendChild(optionElement);
  });
}

function createCheckboxField(label) {
  const fieldContainer = document.createElement('div');
  fieldContainer.classList.add('form-field-container', 'checkbox-container');

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.classList.add('form-field');

  const labelElement = document.createElement('label');
  labelElement.textContent = label;

  fieldContainer.appendChild(checkboxElement);
  fieldContainer.appendChild(labelElement);

  checkboxElement.addEventListener('change', handleFieldInput);

  return fieldContainer;
}

function createSubmitButton(label) {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('form-field-container', 'submit-container');

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = label;
  submitButton.classList.add('form-field', 'submit-button');

  buttonContainer.appendChild(submitButton);

  submitButton.addEventListener('click', handleFormSubmit);

  return buttonContainer;
}

// Function to handle user input
function handleFieldInput(event) {
  console.log(`Field name: ${event.target.name}`);
  console.log(`Field value: ${event.target.value}`);
  // Add your custom logic here
}

function handleFormSubmit(event) {
  event.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
}

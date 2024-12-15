const block = document.querySelector('.touch-form-wrapper');
const categoryToSubcategory = {
  'Choose Your Category': ['Choose Category'],
  'Corporate': ['Exports', 'Media', 'Others','Shareholders','Sustainability'],
  'Careers': ['Careers'],
  'Product Purchase Query': ['Building Product', 'Cement', 'Ready Mix Concrete','UltraTech Building Solutions Product, Services and Solutions(Home Expert)'],
  'Request for Dealership/Retailership': ['Building Products', 'Cement', 'UltraTech Building Solutions(Home Expert)'],
   'Home Building Guidance': ['BaatGharKi Video and Articles', 'Cement Related', 'Concrete Related','Techinical Expert Guidace & Services','Waterproofing and Other Products'],
    'Feedback': ['Feedback from Customers', 'Feedback from Dealers/Retailers']
};

  // Create the form fields
const fullNameField = createFormField('Full Name', 'text', 'full-name');
const mobileNumberField = createFormField('Mobile Number', 'tel', 'mobile-number');
const pinCodeField = createFormField('Pin code', 'text', 'pin-code');
const categoryField = createSelectField('Choose Category', 'category', [
  'Choose Your Category',
  'Corporate',
  'Careers',
  'Product Purchase Query',
  'Request for Dealership/Retailership',
  'Home Building Guidance',
  'Feedback'
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

// Create the cross icon
const closeIcon = document.createElement('img');
closeIcon.src = '../../images/cross.svg'; // Update with your cross icon path
closeIcon.alt = 'Close';
closeIcon.classList.add('close-icon');

// Append the close icon to the block (top right)
block.appendChild(closeIcon);

// Add event listener to close the form
closeIcon.addEventListener('click', function() {
  block.style.display = 'none'; // Hide the form when the cross icon is clicked
});

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
  inputField.placeholder = `${label}`; // Placeholder text

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
  submitButton.classList.add('form-field', 'submit-button');

  // Create the SVG icon
  const arrowIcon = document.createElement('img');
  arrowIcon.src = '../../images/right-side-arrow.svg'; // Update with the path to your SVG file
  arrowIcon.alt = 'Right Arrow';
  arrowIcon.classList.add('right-arrow-icon'); // Optional: Add a class for styling the icon

  // Add the button text
  const buttonText = document.createElement('span');
  buttonText.textContent = label;

  // Append the text and the icon to the submit button
  submitButton.appendChild(buttonText);
  submitButton.appendChild(arrowIcon);

  // Add the submit button to the button container
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

// Fetch the Input Field and convert it into Float number
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

// Fetch the Element Field and convert it into Float number
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

// Set new value into the element
function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
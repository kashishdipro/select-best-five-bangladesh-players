// Fetch the Input Field and convert it into Float number
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

// Set new value into the element
function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
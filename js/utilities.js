function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFeildValueString = inputField.value;
    const inputFeildValue = parseFloat(inputFeildValueString);
    inputField.value = '';
    return inputFeildValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}
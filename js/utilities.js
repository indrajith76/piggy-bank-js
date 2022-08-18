function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFeildValueString = inputField.value;
    const inputFeildValue = parseFloat(inputFeildValueString);
    return inputFeildValue;
}
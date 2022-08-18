document.getElementById('deposit-field').addEventListener('keyup',function(event){
    document.getElementById('diposit-display').innerText = event.target.value;
})

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    if(isNaN(newDepositAmount) || newDepositAmount < 0){
        alert('ENTER VALID NUMBERS !');
        return;
    }
    const previousDepositTotal = getElementValueById('deposit-amount');
    const currentDepositAmount = newDepositAmount + previousDepositTotal;
    setElementValue('deposit-amount', currentDepositAmount);
    const previousTotalBalance = getElementValueById('total-balance');
    const currentTotalBalance = newDepositAmount + previousTotalBalance;
    setElementValue('total-balance', currentTotalBalance);
});
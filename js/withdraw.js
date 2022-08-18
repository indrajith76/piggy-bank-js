document.getElementById('withdraw-field').addEventListener('keyup',function(event){
    document.getElementById('withdraw-display').innerText = event.target.value;
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('ENTER VALID NUMBERS !');
        return;
    }

    const previousTotalBalance = getElementValueById('total-balance');
    if(newWithdrawAmount>previousTotalBalance) {
        alert("YOU DON'T HAVE THAT MUCH MONEY !");
        return;
    }
    const previousWithdrawTotal = getElementValueById('withdraw-amount');
    const currentTotalWithdraw = newWithdrawAmount + previousWithdrawTotal;
    setElementValue('withdraw-amount', currentTotalWithdraw);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    document.getElementById('withdraw-display').innerText = '00';
    setElementValue('total-balance', newTotalBalance)
})
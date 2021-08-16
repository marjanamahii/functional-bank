/*function double(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
*/
function getInputValue() {
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';
    return depositAmount;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);
    const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});

// Handle Withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //get current withdraw  
    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update withdraw
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    //clear input 
    withdrawInput.value = '';

})
// working on deposit

document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field')

    const newDepositAmount = depositField.value;

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotal = depositTotalElement.innerText;

    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);

    depositTotalElement.innerText = currentDepositTotal;

    // another part -------------------------------------------------

    const balanceTotalElement = document.getElementById('balance-total');

    const newBalanceAmount = balanceTotalElement.innerText;

    // console.log(newBalanceAmount);

    const currentBalanceTotal = parseFloat(newBalanceAmount) + parseFloat(currentDepositTotal)

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
});


// working on withdraw

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('clicked')

    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmount = withdrawField.value;

    withdrawField.value = '';

    if (isNaN(parseFloat(newWithdrawAmount))) {
        alert("invalid number");
        return;
    }

    // console.log(newWithdrawAmount)

    const withdrawTotalElement = document.getElementById('withdraw-total');

    const previousWithdrawTotal = withdrawTotalElement.innerText;

    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount)

    // console.log(previousWithdrawTotal)




    // Another part -------------------------------------------

    const balanceTotalElement = document.getElementById('balance-total');

    const newBalanceAmount = balanceTotalElement.innerText;

    // console.log(x, y)


    const x = parseFloat(newBalanceAmount)

    const y = parseFloat(currentWithdrawTotal);

    if (x < y) {
        alert('Invalid');
        return;
    }
    // console.log(newBalanceAmount);

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = parseFloat(newBalanceAmount) - parseFloat(currentWithdrawTotal)


    balanceTotalElement.innerText = currentBalanceTotal;

})
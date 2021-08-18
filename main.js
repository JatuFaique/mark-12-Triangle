const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given')
const checkButton = document.querySelector('#check-button')
const message = document.querySelector('#error-message')
const noOfNotes= document.querySelector(".no-of.notes")

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener('click', validateBillAmount());

function validateBillAmount(){
    hideMessage();
    if (billAmount.value>0){
        if(cashGiven>=billAmount.value){
            const amountToBeReturned = cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);

        }else{
            showMessage('Do you wanna wash plate?')

        }

    }else{
        showMessage("invalid amount")
    }
}

function calculateChange(amountToBeReturned){
    for (let i = 0;i<availableNotes.length;i++){
        const numberofNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes [i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display = 'none'
}
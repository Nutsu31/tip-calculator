let bill = document.getElementById('number');
let tipSum = document.getElementById('tipSum');
const customTip = document.getElementById('customTip')
const totalSum = document.getElementById('totalSum')
const reset = document.getElementById('reset');
const buttonValue = document.querySelectorAll('.btn > button');
const numOfPeople = document.getElementById('numOfPeople');



tipSum.innerHTML = "$" + "0.00"
totalSum.innerHTML = "$" + "0.00"
numOfPeople.value = '1';

reset.addEventListener('click',() => {
    tipSum.innerHTML = "$" + "0.00"
    totalSum.innerHTML = "$" + "0.00"
    bill.value = ""
    customTip.value = ""
    numOfPeople.value = 1;

})

function tipCustom () {
    let result = (bill.value * customTip.value) / 100;
    tipSum.innerHTML = result + "$";
    totalSum.innerHTML = bill.value / numOfPeople.value + result / numOfPeople.value + "$"
}

buttonValue.forEach(item => {
    item.addEventListener('click',() => {
        console.log(item);
        let result = (bill.value * item.value) / 100;
        tipSum.innerHTML = result + "$";
        totalSum.innerHTML = bill.value / numOfPeople.value + result / numOfPeople.value + "$"
    })
});
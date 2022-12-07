let bill = document.getElementById('number');
let tipSum = document.getElementById('tipSum');
const customTip = document.getElementById('customTip')
const totalSum = document.getElementById('totalSum')
const reset = document.getElementById('reset');
const buttonValue = document.querySelectorAll('.btn > button');
const numOfPeople = document.getElementById('numOfPeople');



numOfPeople.value = 1;
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


// function buttonTip (i) {
//     buttonValue[i] = buttonValue.value
//     let result = (bill.value * buttonTip[i].value)/ 100;
//     tipSum.innerHTML = result + '$';
//     totalSum.innerHTML =  bill.value / numOfPeople.value + result / numOfPeople.value + "$";
// }

// numOfPeople.value = 1;
// tipAmount.innerHTML = "$"+ "0.00"
// totalSum.innerHTML = "$"+ "0.00"


// reset.addEventListener('click',()=>{
//     payment.value = '';
//     numOfPeople.value = 1;
//     tipAmount.innerHTML = "$"+"0.00"
//     totalSum.innerHTML = "$"+ "0.00"
// })

// function tipCustom () {
//     let result = (payment.value * customTip.value) / 100;
//     tipAmount.innerHTML = result + "$"
//     totalSum.innerHTML = payment.value / numOfPeople.value + result / numOfPeople.value + "$"
// }


// buttonTip[0].addEventListener('click',()=> {
//     let result = (payment.value * buttonTip[0].value)/ 100;
//     tipAmount.innerHTML = result + '$';
//     totalSum.innerHTML =  payment.value / numOfPeople.value + result / numOfPeople.value + "$";
//     buttonTip[0].className = 'active'
    
// })
// buttonTip[1].addEventListener('click',()=> {
//     let result = (payment.value * buttonTip[1].value)/ 100;
//     tipAmount.innerHTML = result + '$';
//     totalSum.innerHTML = payment.value / numOfPeople.value + result / numOfPeople.value + "$";


    
// })
// buttonTip[2].addEventListener('click',()=> {
//     let result = (payment.value * buttonTip[2].value)/ 100;
//     tipAmount.innerHTML = result + '$';
//     totalSum.innerHTML = payment.value / numOfPeople.value + result / numOfPeople.value + "$";
    
// })
// buttonTip[3].addEventListener('click',()=> {
//     let result = (payment.value * buttonTip[3].value)/ 100;
//     tipAmount.innerHTML = result + '$';
//     totalSum.innerHTML = payment.value / numOfPeople.value + result / numOfPeople.value + "$";
    
// })
// buttonTip[4].addEventListener('click',()=> {
//     let result = (payment.value * buttonTip[4].value)/ 100;
//     tipAmount.innerHTML = result + '$';
//         totalSum.innerHTML = payment.value / numOfPeople.value + result / numOfPeople.value + "$";
    
// })



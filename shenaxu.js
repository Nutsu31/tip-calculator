const amountPay = document.getElementById('number').value;
const selectTip = document.querySelectorAll('.btn > button');
const customTip = document.getElementById('customTip').value;
const totalSum = document.querySelectorAll('.totalSum');
let splitForAll = document.getElementById('totalSum2');
const numOfPeople = document.getElementById('numOfPeople').value;

selectTip[0].onclick = function (){
    let amountPay =document.getElementById('number').value;
    result = amountPay * selectTip[0].value / 100;
    console.log(amountPay * selectTip[0].value / 100);
    document.getElementById('totalSum1').innerHTML = result;
    selectTip[0].style.backgroundColor = '#26C2AE'
}
selectTip[1].onclick = function (){
    let amountPay =document.getElementById('number').value;
    result = amountPay * selectTip[1].value / 100;
    console.log(amountPay * selectTip[1].value / 100);
    document.getElementById('totalSum1').innerHTML = result;
    selectTip[1].style.backgroundColor = '#26C2AE'
}
selectTip[2].onclick = function (){
    let amountPay =document.getElementById('number').value;
    result = amountPay * selectTip[2].value / 100;
    console.log(amountPay * selectTip[2].value / 100);
    document.getElementById('totalSum1').innerHTML = result;
    selectTip[2].style.backgroundColor = '#26C2AE'
}
selectTip[3].onclick = function (){
    let amountPay =document.getElementById('number').value;
    result = amountPay * selectTip[3].value / 100;
    console.log(amountPay * selectTip[3].value / 100);
    document.getElementById('totalSum1').innerHTML = result;
    selectTip[3].style.backgroundColor = '#26C2AE'
}
selectTip[4].onclick = function (){
    let amountPay =document.getElementById('number').value;
    result = amountPay * selectTip[4].value / 100;
    console.log(amountPay * selectTip[4].value / 100);
    document.getElementById('totalSum1').innerHTML = result;
    selectTip[4].style.backgroundColor = '#26C2AE'
}

// splitForAll.onsclick = function () {
//     amountPay =document.getElementById('number').value;
//     resultForSplit = amountPay / numOfPeople.value;
//     console.log(result);
//     selectTip[1].style.backgroundColor = '#26C2AE'
// }
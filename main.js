
// 1. Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let userName = prompt('Enter your name pls', 'Ivan Ivanov');
let email = prompt('Enter your email)', 'email');
let phone = prompt('Enter your phone number in format: +48 111 111 111', 'phone number');

let result = userName + ' ' + email + ' ' + phone;
console.log(result);


//2. Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let number;
let numArray;

while (true) {
    number = prompt('enter 5 digits number:');
    numArray = number.split('').reverse();

    if (numArray.length === 5) {
        let result = numArray.join(' ');
        console.log(result);
        break;
    } else {
        console.log('enter 5 digits number');
    }
}

//2.1 recursion
function inputFiveDigitNumber() {
    let number = prompt('enter 5 digits number:');
    let numArray = number.split('').reverse();
    console.log('LENGTH is ' + number.length)
    if (numArray.length === 5) {
        let result = numArray.join(' ');
        console.log('Greate, result: ' + result);
    } else {
        console.log('your nuber is ' + number.length + 'gigits length, please enter 5');
        inputFiveDigitNumber();
    }
}
inputFiveDigitNumber();


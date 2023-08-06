// დავალება 1
let number1 = prompt('Enter first number');
let number2 = prompt('Enter second number');

if (isNaN(number1) || isNaN(number2)) {
    alert('please, enter only  numbers');
} else {

let sum = number(number1) + Number(number2);
let product = number1 * number2;

alert(
    'The sum of ${number1} and ${number2} is: ${sum}; the product is ${product}'
);
}

// დავალება 2

let a = 1;
let b = 1;

let c = ++a; // 2
let d = c++; // d=2 c=3

alert(a); // 2
alert(c); // 3
alert(d++); // 2

// დავალება 3

alert(5 > 4); // true
alert("apple" > "pineapple"); // false
alert("2" > "12"); // true
alert(undefined == null); // true
alert(undefined === null); // false
alert(null == " 0 "); // false
alert(null === +"0"); // false

// დავალება 4

alert(null || 2 || undefined); // 2
alert(1 && null && 2); // null
alert(null || 2 && 3 || 4); // 3
alert(!1 && !2 || 3); // 3

// დავალება 5

let username = prompt('who there');

console.log(username);

if(username === 'Admin') {
    let password = prompt('Enter password');

    if(password === 'TheMaster') {
        alert('Welcome');
    } else if(password === '' || password === null) {
        alert('canceled');
    } else {
        alert('Wrong password');
    }
    
   console.log(password);
} else if(username === '' || username === null) {
    alert('canceled');
} else {
    alert('I dont know you')
}

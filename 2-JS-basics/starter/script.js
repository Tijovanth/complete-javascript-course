console.log("Hello Tijovanth you are ready to learn javascript. Focus on your studies. Crack zoho or Freshworks");


/* *********************
Variables and Data Types
============
var firstName = "Tijovanth";
console.log(firstName);

var age  = 3;
console.log(age);

var isFirstName = true;
console.log(isFirstName);

var job;
console.log(job);

job = "Teacher";
console.log(job);

//Rules for variables in Js
//variable name should not start with numbers or any special characters expect underscore or dollor
// variable name should not be reserved keyword

// var 3years = 3 it will throw error
// var if = 3

var _fullName = "Tijovanth";
var $myName = "Tijovanth";
console.log(_fullName,$myName);
*/

/* *********************
Variables Mutation and Type and Coercion
================


var firstName = "tijo";
var age = 21

//Type coercion
console.log(firstName+" "+age);

var job, isMarried;
job = 'Developer';
isMarried = false

console.log(firstName+" is a "+age +" year old "+job+" is he married? "+isMarried);
job = "Architect";
// variable mutation
age = "twenty one";
console.log(firstName+" is a "+age +" year old "+job+" is he married? "+isMarried);
// alert function 
alert(firstName+" is a "+age +" year old "+job+" is he married? "+isMarried);
var lastname = prompt("What is his last name?");
console.log("lastName is "+ " " + lastname);
*/

/* *********************
Basic Operators
================
var year,yearJohn,yearMark
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn,yearMark);
console.log(window.now)
console.log(window.ageJohn);
console.log(window.ageMark);

// Logical Operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/

/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/

/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/


/* Coding Challenge - 2
**********************
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

var winner = scoreJohn > scoreMike ?  scoreJohn > scoreMary ? "John" : "Marry" : scoreMike > scoreMary ? "Mike" : "Marry";
console.log( winner + ' \'s team wins with ' + scoreJohn + ' points');
*/






























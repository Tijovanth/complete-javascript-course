// Function Constructor
/*
var Person = function(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.calculateYearOfBorn = function(){
    return 2020 - this.age;
}

Person.prototype.city = 'Chennai';

var tijo = new Person('tijo',21,'developer');
var kama = new Person('kama',21,'designer');
var vishal = new Person('vishal',26,'accountant');

console.log(tijo.calculateYearOfBorn());
console.log(kama.calculateYearOfBorn());
console.log(vishal.calculateYearOfBorn());

console.log(tijo.city,kama.city,vishal.city);
*/

// Object. create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto, {
    name :  {value : 'john'},
    yearOfBirth : {value : '1990'}
});*/

// Passing Function as a Parameter(Call Backs)
/*
var years = [1998,1990,2009,1985]

var arraycalc = function(arr,fn){
    var arrRes = [];
    for(var a = 0; a < arr.length; a++){
        arrRes.push(fn(arr[a]));
    } 
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arraycalc(years,calculateAge);
var fullAges = arraycalc(ages,isFullAge);
var heartRate = arraycalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRate);
*/

// Returning Function
/*
function interviewQuestion(job){
    if(job === 'teacher'){
        return function(){
            console.log("So your job is "+ job +". What subject so you teach?");
        }
    }else if(job === 'designer'){
        return function(){
            console.log("So your job is "+ job +". What design you make?")
        }
    }else{
        return function(){
            console.log("What else you do?");
        }
    }
}

interviewQuestion('teacher')();*/

// Closures
/*
function retirement(retirementage){
    var a = " years is still left";
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementage - age) + a);
    }
}

retirement(59)(1998);

interviewQuestion('teacher')();

function interviewQuestion(job){
    return function(){
        if(job === 'teacher'){
                console.log("So your job is "+ job +". What subject so you teach?");
        }else if(job === 'designer'){
                console.log("So your job is "+ job +". What design you make?")
        }else{
                console.log("What else you do?");
        }
    }
}*/

// Bind Apply Call in Function Prototype

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation : function(timeOfDay, style){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else{
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 29,
    job: 'designer'
}

john.presentation('morning','formal');
john.presentation.call(emily,'afternoon');
john.presentation.apply(emily,['evening','formal']);


var years = [2001,1990,2009,1985]

var arraycalc = function(arr,fn){
    var arrRes = [];
    for(var a = 0; a < arr.length; a++){
        arrRes.push(fn(arr[a]));
    } 
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(limit,el){
    return el >= limit;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arraycalc(years,calculateAge);
var fulAgeLimit = isFullAge.bind(this,20);
var isFullAgeArray = arraycalc(ages,fulAgeLimit);

console.log(ages);
console.log(fulAgeLimit);
console.log(isFullAgeArray);


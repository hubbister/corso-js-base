/**************************************
 * variables and data types
 *

var firstName = 'John';
console.log(firstName);

var lastName = 'serventi';
var age = 28;
var boolean = true;
var junk;

console.log(age);
console.log(boolean);
console.log(lastName);
console.log(junk);
var job;

console.log(job);
//single line comment
/*multi line 
comment*/

/**************************************
 * variables mutation and type coercion
 */

/*
 //Type coercion
 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age);

 var  job, isMarried;

 job = 'teacher';
 isMarried = false;

 console.log(firstName + '  is a ' + age + ' year old ' + job + '. is he married?  ' + isMarried);

 // Variable mutation

age =  'ventotto';


alert(firstName + '  is a ' + age + ' year old ' + job + '. is he married?  ' + isMarried);
job = 'driver';

var lastName = prompt('come si chiama di cognome?');
console.log(firstName + ' ' + lastName);
*/

/**************************************
 * basic operators
 */


/*
 var now, yearMark, yearJhon, ageJohn, ageMark;

now= 2018; 
ageJohn = 28;
ageMark = 333;



// Math Operators
yearJhon = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johOlder = ageJohn > ageMark;
console.log(johOlder);

// typeof operator

console.log(typeof johOlder);
console.log(typeof ageJohn);
console.log(typeof 'sto cazzo');

var x;

console.log(typeof x);
/*
*/
/**************************************
 * operators precedence
 

  var now = 2018;
  var yearJohn = 1989;
  var maggiorenne = 18;
// multiple operators
  var èmaggiorenne = now - yearJohn >= maggiorenne; //true

  console.log(èmaggiorenne);
  // grouping
  var ageJohn = now - yearJohn;
  var ageMark = 35;
  var average = (ageJohn + ageMark) / 2;
  console.log (average);

  // multiple assignement
  var x, y;
x = y = (3 + 5) * 4 - 6; // 8*6-4 // 32 - 6// 6
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;

console.log(x);
x +=1;
x++;
console.log(x);

x--;
console.log(x);
*/

/********************************************
 * coding challenge 1
 *

 var massMark, heightMark, bimMark;
 var massJohn, heightJohn, bimJohn;
 
massMark = 64;
heightMark = 1.67;


massJohn = 92;
heightJohn = 1.95;

bimMark = massMark / (heightMark * heightMark);
bimJohn = massJohn / (heightJohn * heightJohn);

console.log (bimJohn, bimMark);

var chièpiùalto = bimMark > bimJohn;
console.log('john è più alto\' di mark? ' + chièpiùalto);


/*********************************************
 * If / else statements
*/
/*
var nome = 'Lorenzo';
var statoCivile = 'single';

if (statoCivile === 'sposato') {
    console.log(nome + ' è sposato!');
}    
else {
    console.log(nome + ' possibilmente si sposerà presto');
}

var èsposato = true;

if (èsposato) {
    console.log(nome + ' è sposato!');
}    
else {
    console.log(nome + ' possibilmente si sposerà presto');
}



var massMark, heightMark, bimMark;
var massJohn, heightJohn, bimJohn;

massMark = 78;
heightMark = 1.69;


massJohn = 192;
heightJohn = 1.95;

bimMark = massMark / (heightMark * heightMark);
bimJohn = massJohn / (heightJohn * heightJohn);

if (bimMark > bimJohn) {
    console.log('Mark\' BMI is higher than John\'s');
}
else {

    console.log('Mark\' BMI is lower than John\'s');
}


//console.log (bimJohn, bimMark);

//var chièpiùalto = bimMark > bimJohn;
//console.log('john è più alto\' di mark? ' + chièpiùalto);
//test
*/
/*
/*********************************************
 * Boolean logic
 *
 
var nome = 'Lorenzo';
var age = 20;

if (age < 13){
    console.log(nome + ' è un ragazzo');
}
else if (age >=13 && age < 20){ //tra 13 e 20
    console.log(nome + ' è un teenager');
}
else if (age >=20 && age < 30){ //tra 13 e 20
    console.log(nome + ' è un giovane uomo');
}
else {
    console.log(nome + ' è un uomo');
}
*/
/*********************************************
 * the ternary operator
 *

var nome = 'Lorenzo';

var age = 18;
// ternary operator
age >= 18 ? console.log(nome + ' beve birra')
: console.log(nome + ' beve succhi');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(nome + ' beve ' + drink);

/*
if (age >= 18){
    var drink = 'beer';
}
else {
    var drink = 'juice';
}
*

// switch operator
var nome = 'Lorenzo';
var job = 'programmatore';

switch (job) {
    case 'insegnante':
    case 'programmatore':
        console.log(nome + ' insegna il javascript');
        break;
    case 'pornoattore':
        console.log(nome + ' punisce le studentesse ribelli');
        break;
    case 'designer':
        console.log(nome + ' disegna siti porno');
        break;
    default:
        console.log(nome + ' fa schifo al cazzo');
        break;

}
var age = 22;

switch (true){
    case age < 13:
        console.log(nome + ' è un ragazzo');
        break;
    case age >=13 && age < 20:
        console.log(nome + ' è un teenager');
        break;
    case age >=20 && age < 30:
        console.log(nome + ' è un giovane uomo');
        break;
    default:
        console.log(nome + ' è un uomo');
        break;
    
}

/*********************************************
 * truty and falsy
 *

// falsy values, undifined, null, 0, NaN
// truty values: NOT falsy values

var height = 23;

if  (height || height === 0 || height === ''){
    console.log('Variable is defined');
}
else{
    console.log('Variable is undefined');
}

//equality operator
if  (height == '23'){
    console.log('The == operator dose type coercion');
}
if  (height === '23'){
    console.log('The == operator dose type coercion');
}
/*********************************************
* Coding challenge 2
*
var johnTeam1 = 89;
var johnTeam2 = 120;
var johnTeam3 = 103;

var markTeam1 = 116;
var markTeam2 = 94;
var markTeam3 = 123;

var johnAvg = ( 189 + 120 + 103) / 3;
var markAvg = ( 116 + 94 + 123) / 3;
var maryAvg = ( 97 + 104 + 105) / 3;


console.log(johnAvg + ' ' + markAvg + ' ' + maryAvg);  

switch(true){
    case maryAvg > markAvg && maryAvg > johnAvg:    
        console.log('Mary vince');     
        break;
    case markAvg > maryAvg && markAvg > johnAvg:    
        console.log('Mark vince');     
        break;
    case johnAvg > markAvg && johnAvg > maryAvg:    
        console.log('jhon vince');     
        break;
    default:
        console.log('è un pareggio');
        break;
 }

 
/*********************************************
* function
*

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJhon = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJhon, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' Years')
    }
    else {
        console.log(firstName + ' is already retired')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'John');
yearsUntilRetirement(1969, 'John');
/*********************************************
* function statements and expression
*

/*
// function declaration
function whatDoYouDo(job, firstName){

}
*
// function expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' insegna il codice';
        case 'driver':
            return firstName + ' guida';
        case 'designer':
            return firstName + ' si fa i cazzi suoi';
        default:
            return firstName + ' non fa un cazzo';
    }
}

console.log(whatDoYouDo('teacher', 'Jhon'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('è in pensione', 'Manotti'));
/*********************************************
* Arrays
*

// initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);


console.log(names[0], names[1], names[2]);
console.log(names);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
console.log(names);
names[names.length] = 'mery';

console.log(names);

//Different data types

var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];
console.log(jhon);

jhon.push('blue');
console.log(jhon);

jhon.unshift('Mr');
console.log(jhon);

jhon.pop(jhon);
jhon.pop(jhon);
jhon.shift(jhon);
console.log(jhon);
console.log(jhon.indexOf(1990));
console.log(jhon.indexOf(93));

var isDesigner = jhon.indexOf('designer') === - 1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
    
console.log(jhon.indexOf('teacher') === - 1 ? 'John is NOT a designer' : 'John IS a designer');
*/
/*********************************************
* Coding challenge
*


var tipCalculator = function(bill){
 switch(true){
    case bill < 50:
        var percentage = .2; 
        break;
    case bill >= 50 && bill < 200:
        var percentage = .15; 
        break;
    case bill >= 200:
        var percentage = .10;                 
        break;
    }  
    
    console.log(bill, percentage);
    return bill * percentage;       

};

var totalAmount = function(bill){
    return bill + tipCalculator(bill);
}

var amaunt = [124,48,268];
var tips = [tipCalculator(amaunt[0]), tipCalculator(amaunt[1]), tipCalculator(amaunt[2])];
var total = [totalAmount(amaunt[0]), totalAmount(amaunt[1]), totalAmount(amaunt[2])];

console.log(amaunt);
console.log(tips);
console.log(total);

/*********************************************
* object and proprierties
*

//object literal
var john = {
    firstname: 'john', 
    lastName: 'smith',
    birthYear: 1990,
    family: ['jane', 'mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john['lastName']);
console.log(john.firstname);
console.log(john.family);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john.job, john['isMarried']);
console.log(john);

var jane = new Object();
//new object syntax
jane.firstname = 'Jane';
jane.birthYear = 1969;
jane.lastName = 'Smith';
jane['cazzo'] = false;
console.log(jane);
/*********************************************
* methods
*

var john = {
    firstname: 'john', 
    lastName: 'smith',
    birthYear: 1992,
    family: ['jane', 'mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

//console.log (john.calcAge(1990));

//console.log (john.calcAge());

john.calcAge();

console.log (john.age);

/*********************************************
* esercizio 4
*


var jhon = {
    fullName: 'Jhon',
    mass: 80,
    height: 1.10,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'mark',
    mass: 65,
    height: 1.67,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


;
//mark.bmi = calcBmi(this.mass, this.height);
//jhon.bmi = calcBmi(this.mass, this.height):
/*
switch(true){
    case mark.calcBmi() > jhon.calcBmi():
        console.log('Mark ha vinto con ' + mark.bmi);
        break;
    case mark.Bmi < jhon.bmi:
        console.log('John ha vinto con ' + jhon.bmi);
        break;
    default:
        console.log('è un pareggio: ' + mark.bmi + ' = ' + jhon.bmi);
        break;
}*

if (mark.calcBmi() > jhon.calcBmi()) {
    console.log('Mark ha vinto con ' + mark.bmi);    
} else if(mark.bmi < jhon.bmi) {
    console.log('John ha vinto con ' + jhon.bmi);
} else {
    console.log('è un pareggio: ' + mark.bmi + ' = ' + jhon.bmi);
}

/*********************************************
* loops and iteration
*/

/*
for (var i = 1; i <= 20; i+=2){
    console.log(i);
}
*

var jhon = ['Jhon', 'Smith', 1990, 'designer', false, 'blue'];

// for
for (var i = 0; i < jhon.length; i++){
    console.log(jhon[i]);
}

var i = 0;
// while
while (i < jhon.length){
    console.log(jhon[i]);
    i++;
}*
// continue and breake



var jhon = ['Jhon', 'Smith', 1990, 'designer', false, 'blue'];

// for
for (var i = 0; i < jhon.length; i++){
    
    if(typeof jhon[i] !== 'string') continue;
       
    console.log(jhon[i]);    
    
    
}

// for
for (var i = 0; i < jhon.length; i++){
    
    if(typeof jhon[i] !== 'string') break;
       
    console.log(jhon[i]);    
    
    
}


for (var i = jhon.length - 1; i > 0; i--){
    
 //   if(typeof jhon[i] !== 'string') break;
       
    console.log(jhon[i]);    
    
    
/*********************************************
* esercizio 5
*

//prima parte
var tipCalculatorL = {
    bills: [124, 48,268,180,42],  
    calcTip: function(){

        this.tips = [];
        this.total = [];

        for(i = 0; i < this.bills.length; i++){

            if(this.bills[i] < 50) { 
                this.tips[i] = this.bills[i]  * .2; 
            }
            else if(this.bills[i] > 50 && this.bills[i] < 200) {
                this.tips[i] = this.bills[i]  * .15;
            }
            else {
                this.tips[i] = this.bills[i]  * .1;
            }
            this.total[i] = this.tips[i] + this.bills[i];
        }
        
    
        this.avg = this.avg / this.bills.length;
    }
};

tipCalculatorL.calcTip();


console.log(tipCalculatorL);

//seconda parte
var tipCalculatorM = {
    bills: [77, 475, 110, 45],

    calcTip: function(){
        this.tips = [];
        this.total = [];
        
    
        for(i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage = .2;
            }
            else if(bill >= 100 && bill  < 300) {
                percentage = .1;
            }
            else {
                percentage = .25;
            }

            this.tips[i] = percentage * bill;
            this.total[i] = this.tips[i] + bill;
            this.avg += this.tips;
        }

        this.avg = this.avg / this.bills.length;
    }
};

tipCalculatorM.calcTip();
console.log(tipCalculatorM);


function avgTip(tipArray) {
    var avg = 0;
    
    for (var i = 0; i < tipArray.length; i ++){
        avg = avg + tipArray[i];
    };
    
    avg = avg / tipArray.length;
    
    return avg;

}

tipCalculatorL.avg = avgTip(tipCalculatorL.tips);
tipCalculatorM.avg = avgTip(tipCalculatorM.tips);


console.log(tipCalculatorL.avg);
console.log(tipCalculatorM.avg);

if (avgTip(tipCalculatorL.tips) > avgTip(tipCalculatorM.tips)) {
    console.log('ha vinto Luke con' + avgTip(tipCalculatorL.tips))
} else if (avgTip(tipCalculatorL.tips) < avgTip(tipCalculatorM.tips)) {
    console.log('ha vinto marc con' + avgTip(tipCalculatorM.tips))
} else {
    console.log('E\' un pareggio ' + tipCalculatorL.avg + ' ' + tipCalculatorM.avg);
}

*/

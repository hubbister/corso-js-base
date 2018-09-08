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
*/
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
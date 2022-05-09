// simply print "hello world"
console.log("hello world");

//type conversion 
console.log("type conversion example");

var a="2";
var typ= (typeof(a));
console.log(typ);
console.log(a);
var b= Number(a);
console.log(typeof(b));
console.log(b);

//loops "while and for" works same as other language
//while
var a=10;
while(a<=100){
    console.log(a);
    a= a+10;;
}

//for
console.log("for ka example");
var sum=0;
var i;
for( i=1;  i<=10;  i++){
    sum= sum+1;
    
}
console.log(sum);


// conditional statements 

var i=10;
var j= 20;

if(i+j==30){
    console.log("you look good ");
}else{
    console.log("not going to talk to you");
}

//basic calculator using fundamentals of js

let result;


const operator= prompt("Enter operator ( 'either +, -, * or / ):'");

const num1= parseFloat(prompt("enter"));
const num2= parseFloat(prompt("enter"));

switch(operator){
    case '+':
        result= num1+num2;
        console.log(`${num1}+ ${num2}= ${result}`);
        break;
        case '-':
        result= num1-num2;
        console.log(`${num1} - ${num2}= ${result}`);
        break;
        case '*':
        result= num1*num2;
        console.log(`${num1}* ${num2}= ${result}`);
        break;
        case '/':
        result= num1/num2;
        console.log(`${num1}/ ${num2}= ${result}`);
        break;
        default:
        console.log('Invalid operator found');
        break;

}


//array function example

console.log("array function example");

let sum=(a,b)=> a+b; 

/* this means sum a function that accepts two arguments named a and b.
 Upon the execution, it evaluates the expression a + b and returns the result.
 This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1,2)); //3


//Interaction: alert, prompt, confirm

// alert: It shows a message and waits for the user to press “OK”.

alert("it waits until you press ok");
/*
The mini-window with the message is called a modal window.
 The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc,
  until they have dealt with the window. In this case – until they press “OK”. 
*/

//prompt:
/*
The function prompt accepts two arguments:
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
*/

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
/*
The visitor can type something in the prompt input field and press OK.
 Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key,
 then we get null as the result.

The call to prompt returns the text from the input field or null if the input was canceled.
*/

//Confirm:
/*
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise.*/
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed 



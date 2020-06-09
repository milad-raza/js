var check = prompt("Enter a character or number");
var now = check.charCodeAt(0);
if (now >= 65 && now <=90){
document.write("The given character is upper case latter<br>");
}
else if (now >= 97 && now <= 122){
document.write("The given character is lower case latter<br>");
}

var num1, num2;
num1 = prompt("Input the First integer");
num2 = prompt("Input the second integer");
if(num1 > num2){ 
alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else if(num2 > num1){
alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}                  
else{
alert("The values "+ num1+ " and "+num2+ " are equal.");
}

var see = prompt("Enter a number to check it's positive or negative");
if(see>0){
alert("Given number "+see+" is positive");
}
else if(see<0){
alert("Given number "+see+" is negative");
}
else{
alert("Given number "+see+" is zero");
}

var x = prompt("Enter a variable to check it is vowel or not");
if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){
alert(x+" is a vowel");
}
else{
alert(x+" is not a vowel");
}

var pass = "m19991999";
var pass1 = prompt("Please enter your password");
if (pass1 === "m19991999"){
alert("Correct! The password you entered matches the original password");
}
else if(pass1 === ""){
alert("Please enter a password");
}
else{
alert ("Incorrect password");
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert (greeting);
}

var time = prompt("Enter the current time");
if (time >= 0000 && time <1200){
alert("Good morning!");
}
else if (time >= 1200 && time <1700){
alert("Good afternoon!");
}
else if (time >= 1700 && time <2100){
alert("Good evening!");
}
else if (time >= 2100 && time <=2359){
alert("Good night!");
}



 



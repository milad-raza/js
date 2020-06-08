var city = prompt("Please enter the city name");
if (city =="karachi"){
alert("Welcome to city of lights");
}

var gender = prompt("Gender");
if (gender =="male"){
alert("Good morning sir.");
}
else if (gender =="female"){
alert("Good morning ma'am.");
}

var signal = prompt("Signal color");
if (signal =="red"){
alert("Must stop");
}
else if(signal =="yellow"){
alert("Ready to move");
}
else if(signal =="green"){
alert("Move now");
}

var fuel = prompt("Please enter fuel status (in litters)")
if (fuel < 0.25){
alert("Please refill the fuel in your car");
}

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

 if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

document.write("<h1>Mark Sheet</h1>");
var marks = prompt("Enter your obtained marks in 3 subjects");
var total = prompt("Enter total marks");
var per = (marks/total)*100;

if (per >= 80){
var grade = "A-one"
var remarks = "Excellent"
}
else if (per >= 70){
var grade = "A"
var remarks = "Good"
}
else if (per >= 60){
var grade = "B"
var remarks = "You need to improve"
}
else{
var grade = "Fail"
var remarks = "Sorry"
}

document.write("<h3>Total Marks: "+total+"</h3>");
document.write("<h3>Obtained Marks: "+marks+"</h3>");
document.write("<h3>Percentage: "+per+"%</h3>");
document.write("<h3>Grade: "+grade+"</h3>");
document.write("<h3>Remarks: "+remarks+"</h3><br><br>");

var secret = 5;
var num =prompt("Enter a number between 1-10");
if (num==secret){
document.write("Bingo! correct answer <br>");
}
else if (num == secret+1){
document.write("Close enough");
}

var odd1 = prompt("Enter a number to check the number is divisible by 3");
if (odd1%3 === 0){
alert ("Given number is divisible by 3");
}

var num = prompt("Enter a number to check the number is odd/even");
if (num%2 ==0){
alert("Given number is even");
}
else{
alert("Given number is odd");
}

var T = prompt ("Enter the temperature");
if (T > 40){
document.write("It is too hot outside.");
}
else if ( T > 30){
document.write("The Weather today is Normal.");
}
else if ( T > 20){
document.write("Today’s Weather is cool.");
}
else if ( T > 10){
document.write("OMG! Today’s weather is so Cool.");
}

var first = prompt ("Enter first number");
var second = prompt ("Enter second number ");
var operator = prompt ("Enter operator");
var add = (+first)+(+second);
var sub = first - second;
var multi = first * second;
var div = first/second;
var mod = first%second;
if (operator == "+"){
document.write( first + "+" + second + "=" +add);
}

else if (operator == "-"){
document.write( first + "-" + second + "=" +sub);
}

else if (operator == "*"){
document.write( first + "*" + second + "=" +multi);
}

else if (operator == "/"){
document.write( first + "/" + second + "=" +div);
}

else if (operator == "%"){
document.write( first + "%" + second + "=" +mod);
}
	
	
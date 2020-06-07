var first = prompt('Enter your first number for +');
var second = prompt('Enter your second number for +');
var add = (+first)  + (+second);
document.write("Sum of " + first + " and " + second + " is " + add + "<br>");

var third = prompt('Enter your first number for -');
var forth = prompt('Enter your second number for -');
var subtract = (third)  - (forth);
document.write("Subtraction of " + third + " and " + forth + " is " + subtract + "<br>");

var fifth = prompt('Enter your first number for *');
var sixth = prompt('Enter your second number for *');
var multipliey = (fifth)  * (sixth);
document.write("Multiplication of " + fifth + " and " + sixth + " is " + multipliey + "<br>");

var seventh = prompt('Enter your first number for /');
var eight = prompt('Enter your second number for /');
var divide = (seventh)  / (eight);
document.write("Division of " + seventh + " and " + eight + " is " + divide + "<br>");

var nineth = prompt('Enter your first number for %');
var ten = prompt('Enter your second number for %');
var module = (nineth)  % (ten);
document.write("Modulus of " + nineth + " and " + ten + " is " + module + "<br>");

var a;
document.write("Value after variable declaration is " + a +"<br>");
a=6;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a=a+7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
a=13%3;
document.write("The reminder is: " + a + "<br> <br>");

var b=600;
b*600;
document.write("Total cost of buy 5 tickets to a movie is: " + b + "<br> <br>");

document.write("Table of 2 <br>");
document.write("2 * 1 = "  + 2*1 + "<br>");
document.write("2 * 2 = "  + 2*2 + "<br>");
document.write("2 * 3 = "  + 2*3 + "<br>");
document.write("2 * 4 = "  + 2*4 + "<br>");
document.write("2 * 5 = "  + 2*5 + "<br>");
document.write("2 * 6 = "  + 2*6 + "<br>");
document.write("2 * 7 = "  + 2*7 + "<br>");
document.write("2 * 8 = "  + 2*8 + "<br>");
document.write("2 * 9 = "  + 2*9 + "<br>");
document.write("2 * 10 = "  + 2*10 + "<br> <br>");

var c = 25;
var f =(c*9/5)+32;
document.write(c + " °c" + " is " + f + "°f<br>");

var f = 67;
var c =(f-38)*5/9;
document.write(f + " °f" + " is " + c + "°c<br> <br>");

document.write("<h1>Shopping Cart</h1><br><br><br>");

var price1 = 650 , price2 = 100 , quantity1 = 3 , quantity2 = 7 , ship = 100 ;
document.write("Price of item 1 is "+price1 +  "<br>");
document.write("Quantity of item 1 is "+quantity1 + "<br>");
document.write("Price of item 2 is "+price2 + "<br>");
document.write("Quantity of item 2 is "+quantity2 + "<br>");
document.write("Shipping charges "+ship +"<br><br>");
var full= price1*3 + 100*7 + 100;
document.write("Total of your order is " +full + "<br>");

document.write("<h1>Mark Sheet</h1> <br> <br>");
var obtain = 804;
var total = 980 ;
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + obtain + "<br>");
var per = (obtain/total)*100;
document.write("Percentage: " + per +"%<br><br>");


document.write("<h1>Currency in PKR</h1><br><br>");
var us =104.80 ,saudi =28;
var pkr = us*10 + saudi*25;
document.write("Total currency in PKR " + pkr + "<br><br>");

var num = 2;
num = (((num+5)*10)/2); 
document.write(num + "<br><br>");

document.write("Age Calculater <br><br>");
var current =2020;
var base =1999;
var all = current-base;
document.write("Current year: " + current + "<br>");
document.write("Birth year: " + base + "<br>" );
document.write("Your age is: " + all + "<br><br><br>");

document.write("<h1>The Geometrizer</h1><br><br>");
var r = 20;
document.write("Radius of circle is: "+ r + "<br>");
var cr = (2)*(3.142)*(r);
document.write("The circumference is: "+ cr + "<br>");
var ar = (3.142)*(r)*(2);
document.write("The area is: "+ ar + "<br><br><br>");

document.write("<h1>The Life Time Supply Calculator</h1><br><br>");
var favorite = "bravo";
var now = 20;
var till = 60;
var perd = 2;
document.write("Favorite Snacks: "+ favorite +"<br>");
document.write("Current age: "+ now+ "<br>");
document.write("Estimated maximum age: "+ till +"<br>");
document.write("Amount of snaks per day: "+perd +"<br>");
var z = till - now ;
var need = (365*z)*2;


document.write("You will need "+need+" "+favorite+" to last you until the ripe old age of "+till);






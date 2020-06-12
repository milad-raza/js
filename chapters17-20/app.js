var array1 = [[]];


var matrix =[
[0,1,2,3],
[1,0,1,2],
[2,1,0,1]
];
document.write("<h1>"+matrix[0][0]+" "+matrix[0][1]+" "+matrix[0][2]+" "+matrix[0][3]+"</h1>");
document.write("<h1>"+matrix[1][0]+" "+matrix[1][1]+" "+matrix[1][2]+" "+matrix[1][3]+"</h1>");
document.write("<h1>"+matrix[2][0]+" "+matrix[2][1]+" "+matrix[2][2]+" "+matrix[2][3]+"</h1><br><br>");


for (var i=1; i<11; i++)
document.write("<b>"+i+"</b><br>");

document.write("<br>");
var k = prompt("Enter a table number which is you want");
var till = prompt ("Enter the limit you want");
for (var j=1; j<=till; j++)
document.write(k+" X "+j+" = "+(k*j)+"<br>");

document.write("<br>");
var fruits = ["apple","banana","mango","orange","strawberry"];
for(var a=0; a<=4; a++)
document.write("Element at index "+a+" is "+fruits[a]+"<br>");


document.write("<br><h3>Counting:</h3>");
for (var a1=1; a1<=15; a1++)
document.write(a1+",");

document.write("<br><h3>Reverse counting:</h3>");
for (var a2=10; a2>=1; a2--)
document.write(a2+",");

document.write("<br><h3>Even:</h3>");
for (var a3=0; a3<=20; a3++)
if (a3%2 === 0){
document.write(a3+",");
}

document.write("<br><h3>Odd:</h3>");
for (var a4=0; a4<=20; a4++)
if (a4%2 === 1){
document.write(a4+",");
}

document.write("<br><h3>Series:</h3>");
for (var a3=2; a3<=20; a3++)
if (a3%2 === 0){
document.write("<b>"+a3+"k,</b>");
}


document.write("<br>");
var enter = prompt("Welcome to ABC Bakery. what do u want to order sir/ma'am?");
if (enter == "cake"||"apple pie"||"cookie"||" chips"||"patties"){
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var z=0; z<arr.length; z++)
if(arr[z] === enter){
document.write("<h3>"+enter+" is <b>available</b> at index "+z+" in our bakery</h3>");
}
}
else{
document.write("<h3>We are sorry. "+enter+" is <b>not available</b> in our bakery</h3>");
}



document.write("<br>");
var arr = [24,53,78,91,12];
var one = arr[0];
for (var i=0; i<arr.length; i++)
if (one < arr[i] ){
one = arr[i];
}
document.write("<h2>Array items: "+arr+"</h2>"+"<h2>The largest number is "+one+"</h2><br>");


document.write("<br>");
var arry = [24,53,78,91,12];
var oneo = arry[0];
for (var i=0; i<arry.length; i++)
if (arry[i] < oneo ){
oneo = arry[i];
}
document.write("<h2>Array items: "+arry+"</h2>"+"<h2>The smallest number is "+oneo+"</h2><br>");


document.write("<br>");
for (var x = 1; x <= 100; x++){
if (x%5 == 0){
document.write(x+",");
}
}




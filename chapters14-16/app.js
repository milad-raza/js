var names=[];

var students= new Array();

var cities = ["karachi","lahore","islamabad","quetta"];
alert(cities[2]);

var numbers = [10,20,30,40];
alert(numbers[3]);

var booleans = [1>3,1<3];
alert(booleans[0]);
alert(booleans[1]);

var mixed = ["Lahore",10,1>2];
alert(mixed[0]);
alert(mixed[1]);
alert(mixed[2]);

var title = ["<h3>Qualifications: </h3><br>"]
document.write(title[0]);
var qualifications = ["SSC","HSC","BSC","BS","B.COM","MS","M. Phil.","PhD"]
for (var i=0; i<qualifications.length; i++)
document.write("<h3>"+(i+1)+ ") " + qualifications[i]+"</h3>");

var student = ["Hassan","Salman","Farhan"];
var scores = [420,245,300];
var per1 = (scores[0]/500)*100;
var per2 = (scores[1]/500)*100;
var per3 = (scores[2]/500)*100;
document.write("Score of "+student[0]+" is "+scores[0]+ ". Percentage: "+per1+" %<br>");
document.write("Score of "+student[1]+" is "+scores[1]+ ". Percentage: "+per2+" %<br>");
document.write("Score of "+student[2]+" is "+scores[2]+ ". Percentage: "+per3+" %<br><br>");



var colors = ["blue","red","green"];
document.write(colors+"<br>");

var value = prompt("Enter the color name which you want to add at the beginning of the colors");
colors.splice(0,0,value);
document.write(colors+"<br>");

var value1 = prompt("Enter the color name which you want to add at the end of the colors");
colors.splice(4,0,value1);
document.write(colors+"<br>");

colors.splice(0,0,"orange","pink");
document.write(colors+"<br>");

colors.splice(0,1);
document.write(colors+"<br>");

colors.splice(5,1);
document.write(colors+"<br>");

var user = prompt("In which position you want to add color");
var namez = prompt("Enter the color name you want to add");
colors.splice(user-1,0,namez)
document.write(colors+"<br>");

var user2 = prompt("In which position you want to delete color/colors");
var namez2 = prompt("How many colors do u want to remove");
colors.splice(user-1,namez2)
document.write(colors+"<br><br>");


var score = [320,230,480,120];
score.sort();
document.write(score+"<br><br>");


var cities2 =["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
var city2 = [cities2[0],cities2[2],cities2[4]];
document.write(city2+"<br><br>");


var stri = ["This","is","my","cat"];
document.write("<h2>Array:<br>"+stri+"</h2><br>");
var noe = stri.join(" ");
document.write("<h2>String:<br>"+noe+"</h2><br><br>");


var device = ["Devices:"];
document.write("<h3>"+device+"</h3><br>");
var devices = ["keyboard","mouse","printer","monitor"];
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3><br>");


var device = ["Devices:"];
document.write("<h3>"+device+"</h3><br>");
var devices = ["keyboard","mouse","printer","monitor"];
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3><br>");


var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select><option>"+phones[0]+"</option>"+"<option>"+phones[1]+"</option>"+"<option>"+phones[2]+"</option>"+"<option>"+phones[3]+"</option>"+"<option>"+phones[4]+"</option>"+"<option>"+phones[5]+"</option></select>");



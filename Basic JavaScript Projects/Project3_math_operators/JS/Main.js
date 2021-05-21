// this displays the results of addition

function add_Function() {
    var addition = 4 + 5;
    document.getElementById("Math").innerHTML = "4 + 5 = " + addition;
}
//displays the results of subtraction

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

//displays the results of multiplication
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

//displays the results of division
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

//displays the results of several operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}


//displays the remainder of division
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}


//displays the reversed number
function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

//displays a random number
function aRandom() {
    document.getElementById("Math8").innerHTML = Math.random();
}
//displays an increased number
var XY = 5;
XY++;
document.write(XY);
// puts in line breaks
document.write("<br>");
document.write("<br>");
//displays a decreased number
var XYZ = 5.25;
XYZ--;
document.write(XYZ);

//line breaks
document.write("<br>");
document.write("<br>");


//creates some pop up alerts with random numbers
window.alert(Math.random());

window.alert(Math.random() * 100);

//writes a rounded number
document.write(Math.round(8.7));
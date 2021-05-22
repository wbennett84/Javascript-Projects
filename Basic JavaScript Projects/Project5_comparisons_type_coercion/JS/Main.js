//writes the data type
document.write(typeof "Lambo");
//this is a line break
document.write("<br>");
//writes the data type
document.write(typeof 6);

document.write("<br>");
//writes a combo of two data types, forcing them together since that's what JS does
document.write("140" +9);
document.write("<br>");
//will display true or false because it's doing greater than comparisons
document.write(90 > 80);
document.write("<br>");
document.write(1 > 2);

document.write("<br>");
//writes the results in the console log
console.log(2 + 2);
console.log(2 > 8);

document.write("<br>");
// writes true if the values are equal
document.write(10 == 10);

document.write("<br>");
//writes true if the vars and data types are equal
x = 10;
y = 10;
document.write(x === y);

document.write("<br>");
//writes true if the vars and data types are equal
x = 1;
y = 10;
document.write(x === y);

document.write("<br>");
//writes true if the vars and data types are equal
a = 8;
b = "71";
document.write(a === b);

document.write("<br>");
//writes true if the vars and data types are equal
z = 8;
y = "8";
document.write(z === y);

document.write("<br>");
//writes true if the vars and data types are equal
c = "Cherry";
d = "Cherry";
document.write(c === d);

document.write("<br>");
//writes true is they're equal, false if not
document.write(3 == 11);



document.write("<br>");

//compares and writes true if parameters met
document.write(5 > 2 && 10 > 4);
document.write("<br>");
document.write(5 > 10 && 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 4);
document.write("<br>");
document.write(5 > 10 || 1 > 4);


document.write("<br>");

//checks to see if something is not true and writes true if not true and false if true
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//checks to see if something is not true and writes true if not true and false if true
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}


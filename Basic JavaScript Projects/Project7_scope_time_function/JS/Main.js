//assigns a global variable and creates a couple adding functions
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


//creates a local variable and adding function.

function Add_numbers_3() {
    var Y = 11;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
 //commeting out since it breaks the script.    document.write(Y + 100 + "<br>");
 // This is the intentional lack of variable to break the code
 //and the console log I'd use to debug it.
 
//    console.log(Y + 100 + "<br>");
}
Add_numbers_3();
Add_numbers_4();

//creates an if then statement and writes some text if conditions met.

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.");
}

//will show some text if it's later than 6pm
function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//line break
document.write("<br>");

//writes some text if condition is met
function myFunction() {
    if (7 > 6) {
        document.write("Yes, 7 is greater than 6.");
    }
}
myFunction();

//this writes some text if older than 18, different text if younger than 18
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//this tells you if it's morning, afternoon or night based on the date.gethours function.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
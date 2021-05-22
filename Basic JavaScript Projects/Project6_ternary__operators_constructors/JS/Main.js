
//this is a constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//creating some new objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Will = new Vehicle("Tesla", "CyberTruck", 2021, "Metal");
//this function displays data from the objects/string with a button push.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//this function displays data from the objects/string with a button push.
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Will drives a " + Will.Vehicle_Color + "-colored " + Will.Vehicle_Model + " manufactured in " + Will.Vehicle_Year;
}

//some breaks
document.write("<br>");
document.write("<br>");


//this is a constructor function
function Pie(Type, Temperature) {
    this.Pie_Type = Type;
    this.Pie_Temp = Temperature;
}
//creating some new objects
var Apple = new Pie("Apple", "hot");
var Cherry = new Pie("Cherry", "warm");

//this function displays data from the objects/string with a button push.
function myFunction3() {
    document.getElementById("DifferentPies").innerHTML = 
    "This is an " + Apple.Pie_Type + " pie that is " + Apple.Pie_Temp + ".";
}

//some breaks
document.write("<br>");
document.write("<br>");







//this function assigns the value from Count function to a paragraph tag.
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
   //this is a nested function that returns a value   
    function Count() {
        var Starting_point = 99;
        function Plus_one() {Starting_point += 11;}
        Plus_one();
        return Starting_point;
    }
}


//this is a ternery operator
function Vote_Function() {
  //assigns variables and values
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    //assigns canvote var a conditional value based on Age input and strings
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
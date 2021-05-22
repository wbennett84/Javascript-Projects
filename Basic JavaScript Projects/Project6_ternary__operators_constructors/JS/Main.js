

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Will = new Vehicle("Tesla", "CyberTruck", 2021, "Metal");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Will drives a " + Will.Vehicle_Color + "-colored " + Will.Vehicle_Model + " manufactured in " + Will.Vehicle_Year;
}


document.write("<br>");
document.write("<br>");

function Pie(Type, Temperature) {
    this.Pie_Type = Type;
    this.Pie_Temp = Temperature;
}

var Apple = new Pie("Apple", "hot");
var Cherry = new Pie("Cherry", "warm");


function myFunction() {
    document.getElementById("DifferentPies").innerHTML = 
    "This is an " + Apple.Pie_Type + " that is " + Apple.Pie_Temp + ".";
}


document.write("<br>");
document.write("<br>");


var var = 5;
document.write(var);





function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
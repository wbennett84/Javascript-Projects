//establishes a let object and creates a method to return a string and info from the object

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


//this function is going through printing a string/value as long as certain conditions are met
// and skipping certain things based on the break and continue aspects.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 9) { break; }
  if (i === 6) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = text;



//this is a loop function that prints until it is 11
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


//this returns the amount of characters in my name
function myFunction() {
    var str = "William Matthew Bennett";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

//creates an array and a loop which returns every instrument in the list
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//sets up a function with an array inside and returns a string with the 2nd index of the array.
function cat_pics(){
    var Cat_Picture = []
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[2] + ".";
}


//sets up a function with an array inside which returns a string and the 0 index of the array.
function array_Function(){
    var WillsCars = []
    WillsCars[0] = "Dodge";
    WillsCars[1] = "Chevy";
    WillsCars[2] = "Volkswagon";
    WillsCars[3] = "BMW";
    document.getElementById("Array").innerHTML = "Will's first car was a " + 
        WillsCars[0] + ".";
}


//sets up a constant and values for it and returns a string with some values.
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.price = "$1100";
    Musical_Instrument.sound = "great";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price + " and it sounded " + Musical_Instrument.sound;
}


//demonstrates a let and variable, how a let is restricted to the curly brackets
var X = 82;
document.write("<br><br>" + X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


//returns PI
function myFunction4() {
    return Math.PI;
  }
  
  document.getElementById("demo2").innerHTML = myFunction4();



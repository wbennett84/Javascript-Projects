//this is a concat function that will combine and return multiple strings
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//this will slick out a part of the string and return it
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//this makes the entire string uppercase
function wFunction() {
    var word = "Hello!";
    var result = word.toUpperCase();
    document.getElementById("cap").innerHTML = result;
  }

//this is going to show the string position of "JS"
  function myFunction() {
    var str = "This is a new JS File!"; 
    var n = str.search("JS");
    document.getElementById("search2").innerHTML = n;
  }

//this is going to write out the number 182 into a string
  function string_Method() {
      var X = 182;
      document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }

// this is going to limit the output to 10 digits
  function precision_Method() {
      var X = 12938.3012987376112;
      document.getElementById("Precision").innerHTML = X.toPrecision(10);
  }
//this is going to limit the decimal place to three
  function mFunction() {
    var number = 2.586456;
    var corrected = number.toFixed(3);
    document.getElementById("deci").innerHTML = corrected;
  }

//this is just going to return the basic value of the variable
  function bFunction() {
    var string = "Will wrote this";
    var result = string.valueOf();
    document.getElementById("place").innerHTML = result;
  }
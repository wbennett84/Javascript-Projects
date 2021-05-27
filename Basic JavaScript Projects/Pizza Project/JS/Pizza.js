
function getReceipt() {
  //This initializes our string so it can get passed from 
  //function to function, growing line by line into a full receipt
 
  //we're assigning some variables for later use
  var text1 = "<h3>You Ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
 //we're scanning through an array consisting of the class size to isolate
 //what has been selected as a pizza size
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
 //here's where the price value is being found out and assigned
  if (selectedSize === "Personal Pizza") {
      sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  //this is to inform anyone looking in the console what the values are
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("size text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  //these variables will get passed on to each function
  getTopping(runningTotal,text1);
};

//this function is going through the array based on the class name "toppings"
//and adding up how many toppings are selected
function getTopping(runningTotal,text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  for (var j = 0; j < toppingArray.length; j++)  {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: ("+toppingArray[j].value+")");
      text1 = text1+toppingArray[j].value+"<br>";
    }
  }
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
      toppingTotal = (toppingCount - 1);
  } else {
    toppingTotal = 0;
  }
  //this gives the total price
  runningTotal = (runningTotal + toppingTotal);
  //logs some more info
  console.log("total selected topping items: "+toppingCount);
  console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
  console.log("topping text1: "+text1);
  console.log("Purchase Total: "+"$"+runningTotal+".00");
  //we're putting the data in the html now
  document.getElementById("showText").innerHTML=text1;
  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
      runningTotal+".00"+"</strong></h3>";
};
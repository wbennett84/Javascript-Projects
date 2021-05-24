//this sets up the variable for slidenumber and
//sets its value to 1, so that it starts at the beginning
var slideNumber = 1;
showSlides(slideNumber);

// This controls forward and backwards
function plusSlides(n) {
  showSlides(slideNumber += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideNumber = n);
}
// this changes the slides based on different conditions
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNumber = 1}
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideNumber-1].style.display = "block";
  dots[slide-1].className += " active";
}




//this is the countdown function
function countdown() {
    //setting a variable based on user input
    var seconds = document.getElementById("seconds").value;
//this is the actual timing mechanism
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        //this is a conditional statement which will terminate the countdown and display
        //time's up! when the clock runs out
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
        //calls the tick function into operation
    tick();
}
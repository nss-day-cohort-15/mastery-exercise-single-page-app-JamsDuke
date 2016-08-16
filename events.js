//1. Make a function that adds the "clickedCarCard" class to any carCard that is clicked.

//2. Also, on click of the car element, clear the value of the text input in the navbar,
//and put the cursor in the text input.

//3.When you start typing into the navbar's text input,
// the description of the currently selected car should be
// bound to what you are typing in and match it exactly.

//4.IIFE that uses a function that creates all event handlers,
//name it activateEvents

// click on car element in DOM
function activateEvents () {
  var userInput = document.getElementById("userInput");
  var clickListener = document.getElementsByClassName("carCard");
  var textLocation = null;
// listener is added here
  for (var i = 0; i < clickListener.length; i++) {
    var currentCard = clickListener[i];
    currentCard.addEventListener("click", function (event){
      var cardSelected = event.currentTarget;
      userInput.focus();
      userInput.value = ("");

      textLocation = cardSelected.getElementsByClassName("enteredText")[0];
  restoreState(clickListener, cardSelected);
  changeState(clickListener, cardSelected)
    })
  }
  userInput.addEventListener("keyup", function(){
    if (textLocation !== null) {
      textLocation.innerHTML = userInput.value;
    }
  })
}
// function that adds class that changes border and bg color
function changeState(clickListener, cardSelected){
  cardSelected.classList.add("clickedCarCard");
};
// function that removes the class that changes border and bg color
function restoreState(clickListener, cardSelected){
  for (var i = 0; i < clickListener.length; i++){
    clickListener[i].classList.remove("clickedCarCard");
    clickListener[i].classList.add("col-md-4")
  }
};
// When you click on one of the car elements,
// change the width of the border to a higher value,
// and change the background color to any other color of your
// choosing.

// Also, on click of the car element,
// clear the value of the text input in the navbar,
// and put the cursor in the text input.

// When you start typing into the navbar's text input,
// the description of the currently selected car should be
// bound to what you are typing in and match it exactly.

//IIFE that uses a function that creates all event handlers,
//name it activateEvents

//Final IIFE sets and resets border thickness and background
//on carCards

var CarLot = (function (highlightCard) {

  highlightCard.addClickedCarCardClass = function () {
    var allCards = document.querySelectorAll(".carCard");

    for (var i = allMyCarCards.length - 1; i >= 0; i--){
    allCards[i].classList.remove("clickedCarCard")
    }
  }

  highlightCard.removeClickedCarCardClass = function (targetCard) {
    currentCarCard.classList.add("clickedCarCard");
  }

  return highlightCard
})(CarLot);
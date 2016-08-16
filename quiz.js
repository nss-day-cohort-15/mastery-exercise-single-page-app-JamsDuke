  // Loop over the inventory and populate the page
function populatePage(inventory) {
  var showRoom = document.querySelector('#showRoom')
  var outputString = ""
  // console.log(inventory)
  for (var i = 0; i < inventory.length; i++) {
    console.log(inventory[i].make)
    var car = inventory[i]
    if (i % 3 === 0) {
      outputString += `<div class="row">`
    }

    //string interpolation
    outputString += `<div class="col-md-4 carCard" style="border-color: ${car.color}">
    <img src="${car.url}">
    <h3>${car.year} ${car.make} ${car.model}</h3>
    <h3>$${car.price}</h3>
    <h3>${car.color}</h3>
    <h3>${car.purchased}</h3>
    <p class="enteredText">${car.description}</p>
    </div>`
  }
  if ((i + 1) % 3 === 0) {
    outputString += `</div>`
  }
showRoom.innerHTML = outputString
activateEvents();
}

  // Now that the DOM is loaded, establish all the event listeners needed
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
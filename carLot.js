var CarLot = (function lotModule(carLot = {}) {
  carLot = [];

  carLot.getInventory = function getCars(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'inventory.json');
    xhr.addEventListener('load', function onLoad() {
      carLot = JSON.parse(xhr.responseText);
      console.info('Success: Loaded songs from songs.json.');
      callback(carLot);
    });
    xhr.send();
  }

  return carLot;
})(CarLot);

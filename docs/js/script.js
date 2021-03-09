"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var tabs = function tabs() {
    var cardDetailChange = document.querySelectorAll('.card-detail__change');
    var cardDetailsTitle = document.querySelector('.card-details__title');
    var cardImageItem = document.querySelector('.card__image_item');
    var cardDetailsPrice = document.querySelector('.card-details__price');
    var descriptionMemory = document.querySelector('.description__memory');
    var data = [{
      name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
      image: 'img/iPhone-graphite.png',
      price: 95990,
      memoryROM: 128
    }, {
      name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
      image: 'img/iPhone-silver.png',
      price: 97990,
      memoryROM: 256
    }, {
      name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
      image: 'img/iPhone-blue.png',
      price: 99990,
      memoryROM: 128
    }];

    var deactive = function deactive() {
      cardDetailChange.forEach(function (btn) {
        return btn.classList.remove('active');
      });
    };

    cardDetailChange.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        if (!btn.classList.contains('active')) {
          deactive();
          btn.classList.add('active');
          cardDetailsTitle.textContent = data[i].name;
          cardImageItem.src = data[i].image;
          cardImageItem.alt = data[i].name;
          cardDetailsPrice.textContent = data[i].price + '₽';
          descriptionMemory.textContent = "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C (ROM) ".concat(data[i].memoryROM, " \u0413\u0411");
        }
      });
    });
  };

  tabs();
});
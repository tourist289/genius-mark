'use strict';

(function() {
  window.inputNumber = function(element) {
    let elements = document.querySelectorAll(element);

    elements.forEach( element => {
    let input = element.querySelector('.js-input');
    let prevElem = element.querySelector('.js-input__decrement');
    let nextElem = element.querySelector('.js-input__increment');
    let min = input.getAttribute('min');
    let max = input.getAttribute('max');

    init(input);

    function init(input) {

      prevElem.addEventListener('click', decrement);
      nextElem.addEventListener('click', increment);

      input.addEventListener('keyup', function() {
        this.value = this.value.replace(/\D/, '');
      });

      function decrement() {
        let value = input.value;
        value--;
        if(!min || value >= min) {
          input.value = value;
        }
      }

      function increment() {
        let value = input.value;
        value++;
        if(!max || value <= max) {
          input.value = value++;
        }
      }
    }
    });
  }
})();

inputNumber('.js-input__wrap');



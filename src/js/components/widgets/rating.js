(function () {

  let ratings = Array.from( document.querySelectorAll('.js-rating') );

  if (!ratings) return;

  ratings.forEach( function (rating) {
    let ratingLength = rating.querySelector('input').value;
    let ratingItem =  Array.from( rating.querySelectorAll('.js-rating__star') );

    ratingItem.forEach(function (elem, i) {
      let startFrom = i+1;

      if (startFrom <= ratingLength) {
        elem.classList.add('rating__item--active');
      }
    })
  });

})();

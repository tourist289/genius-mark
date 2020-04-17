document.addEventListener("DOMContentLoaded", function() {
  //<img class="js-lazyLoad" src="javascript:undefined" data-src="img/source/img.phg" alt="">
  //.js-lazyLoad--done{ // animation
  //     opacity: 1;
  //     animation: show-lazyLoad .5s linear;
  // }
  // @keyframes show-lazyLoad{
  //     0% {
  //         opacity: 0;
  //         transform: scale(0)
  //     }
  //     25% {
  //         opacity: .25;
  //         transform: scale(.25)
  //     }
  //     50% {
  //         opacity: .5;
  //         transform: scale(.5)
  //     }
  //     75% {
  //         opacity: .75;
  //         transform: scale(.75)
  //     }
  //     100% {
  //         opacity: 1;
  //         transform: scale(1)
  //     }
  // }

  let lazyLoadImg;

  if ("IntersectionObserver" in window) {
    lazyLoadImg = document.querySelectorAll(".js-lazyLoad");
    let imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let elem = entry.target;

          if (entry.target.tagName ===  'IMG') {
            elem.src = elem.dataset.src;
            elem.classList.remove("js-lazyLoad");
            elem.classList.add("js-lazyLoad--done");
            imageObserver.unobserve(elem);
          } else {
            elem.style.backgroundImage = `url(${elem.dataset.src})`;
            elem.classList.remove("js-lazyLoad");
            elem.classList.add("js-lazyLoad--done");
            imageObserver.unobserve(elem);
          }
        }
      });
    });

    lazyLoadImg.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    let throttleTimeout;
    lazyLoadImg = document.querySelectorAll(".js-lazyLoad");

    function lazyload () {
      if(throttleTimeout) {
        clearTimeout(throttleTimeout);
      }

      throttleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        Array.from(lazyLoadImg).forEach(function(elem) {
          if(elem.offsetTop < (window.innerHeight + scrollTop)) {
            if (elem.tagName ===  'IMG') {
              elem.src = elem.dataset.src;
              elem.classList.remove('js-lazyLoad');
              elem.classList.add('js-lazyLoad--done');
            } else {
              elem.style.backgroundImage = 'url('+elem.dataset.src+')';
              elem.classList.remove("js-lazyLoad");
              elem.classList.add("js-lazyLoad--done");
            }
          }
        });
        if(lazyLoadImg.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});


// let lazyElements = [...document.querySelectorAll('.js-lazyLoad')];
//
// const interactSettings = {
//   root: document.querySelector('main'),
//   rootMargin: '0px 0px 200px 0px'
// };
//
// function onIntersection(elements) {
//   elements.forEach(elem => {
//     if (elem.isIntersecting) {
//       let currentElem = elem.target;
//       let imgData = currentElem.dataset.src;
//       let elemData = currentElem.dataset.bgImg;
//
//       observer.unobserve(currentElem);
//       if(imgData){
//         currentElem.src = imgData;
//       }else if(elemData){
//         currentElem.style.backgroundImage = `url('${elemData}')`;
//       }
//     }
//   })
// }
//
// let observer = new IntersectionObserver(onIntersection, interactSettings);
//
// if (lazyElements.length) lazyElements.forEach(elem => observer.observe( elem ));

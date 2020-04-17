let resizeTimer;
let jsNested = document.querySelectorAll('.js-nested');

window.addEventListener('resize', function(env) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    let jsNested = document.querySelectorAll('.js-nested');
    let jsNestedBtn = document.querySelectorAll('.js-nested__btn');

    if (jsNested && !jsNestedBtn.length && window.innerWidth < 768 ){
      hideBlogPost();
    }else if(jsNested && jsNestedBtn.length && window.innerWidth >= 768 ){

      jsNested.forEach(function(item){
        Array.from(item.children).forEach(function (child) {
          child.classList.remove('hidden')
        });

        item.nextSibling.remove()
      });
    }
  }, 250);

});

// <ul class="js-nested">
//   <li>Number 1 item</li>
// <li>Number 2 item</li>
// <li>Number 3 item</li>
// <li>Number 4 item</li>
// <li>Number 5 item</li>
// <li>Number 6 item</li>
// <li>Number 7 item</li>
// <li>Number 8 item</li>
// <li>Number 9 item</li>
// <li>Number 10 item</li>
// </ul>

if (jsNested.length && window.innerWidth < 768 ){
  hideBlogPost();
}

function hideBlogPost() {
  const TextShow = 'Show more',
        TextHide = 'Hide';

  if( jsNested ){
    Array.from(jsNested).forEach( item => {
      let hiddenList = [];
      let itemToShow = 2 ;
      let children = item.children;
      let childrenLength = children.length;

      if (childrenLength > itemToShow) {
        Array.from(children).forEach((child, index) => {
          if(itemToShow <= index){
            hiddenList.push(child);
            child.classList.add('hidden')
          }
        });

        item.insertAdjacentHTML('afterend', `<div class="btn btn--white js-nested__btn">${TextShow}</div>`);

        let btn = item.nextSibling;

        if ( btn ){
          btn.addEventListener('click', function () {
            hiddenList.forEach((child) => {
                child.classList.toggle('hidden')
            });
          })
        }
      }
    });
  }
}

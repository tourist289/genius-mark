(function () {
    const blocks = document.querySelectorAll('.js-more');

    const textLinkShow = document.querySelector('.js-more').dataset.linkShow;
    const textLinkHide = document.querySelector('.js-more').dataset.linkHide;

    Array.from(blocks).forEach( block => {
      let realHeight = block.clientHeight,
          dataHeight = block.dataset.height,
          content = block.querySelector('.show-more__body');
      let moreLink = `<span data-full-height="${realHeight}" class="show-more__link js-more__link">${textLinkShow}</span>`;

      if( realHeight > dataHeight ) {
        block.classList.add('show-more--minimized');
        block.insertAdjacentHTML('beforeend', moreLink);
        content.style.height = `${dataHeight}px`;
        block.dataset.trigger = 'true';
      }

      block.addEventListener('click', clickHandler )
    });

    function clickHandler (evt) {
      let target = evt.target;

      if (target.classList.contains('js-more__link')) {
        let link = target;
        let parentElem = link.parentElement;
        let content = parentElem.querySelector('.show-more__body');

        let height = parentElem.dataset.height;
        let fullHeight = parentElem.querySelector('.js-more__link').dataset.fullHeight;

        if (parentElem.dataset.trigger) {
          content.style.height = `${fullHeight}px`;
          link.textContent = textLinkHide;
          link.classList.add('open');
          parentElem.dataset.trigger = '';
          parentElem.classList.add('show-more--open');
        }else {
          content.style.height = `${height}px`;
          link.textContent = textLinkShow;
          link.classList.remove('open');
          parentElem.dataset.trigger = 'true';
          parentElem.classList.remove('show-more--open');
        }
      }
    }
})();

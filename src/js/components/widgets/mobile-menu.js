(function () {
  let burgerBtn = document.querySelector('.js-menu-btn');
  let siteWrap = document.querySelector('.site-wrap');
  let navWrap = document.querySelector('.nav-mobile-wrap');

  siteWrap.addEventListener('click', function (evt) {
    let target = evt.target;

    if (!target.classList.contains('nav-mobile-wrap--open') && target.classList.contains('site-wrap--overlay')) {
      toggleMenu( burgerBtn );
    }
  });

  burgerBtn.addEventListener('click', function () {
    toggleMenu( this );
  });

  function toggleMenu(elem) {
    bodyScrollLock.disableBodyScroll(navWrap);

    elem.classList.toggle('is-active');
    elem.nextElementSibling.classList.toggle('nav-mobile-wrap--open');
    siteWrap.classList.toggle('site-wrap--overlay');
    siteWrap.parentElement.classList.toggle('no-scroll');
    siteWrap.parentElement.parentElement.classList.toggle('no-scroll');

    if (!siteWrap.classList.contains('site-wrap--overlay')) {
      setTimeout( () => bodyScrollLock.clearAllBodyScrollLocks() ,200 )
    }
  }
})();

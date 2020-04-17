( function() {
  let navToggleBtn = $(".js-menu-btn");
  let closeMenuBtn = $('.js-menu-close');
  let body = $('body');
  let menuOverlay = body.find('.menu-overlay');
  let canvasMenu = document.getElementById('js-canvas-menu');
  let navWrap = $('.canvas-menu');

  navToggleBtn.on('click', function () {
    try {
      bodyScrollLock.disableBodyScroll(canvasMenu);
    } catch (e) {
      console.log(`Body Scroll Lock can't Call ---> ${e}`);
    }

    setTimeout(function () {
      $(this).toggleClass('is-active');
      navWrap.toggleClass("canvas-menu--open");
      menuOverlay.toggleClass("menu-overlay--show");
      body.addClass('content-blur');
    }, 500);

  });

  $(window).on('click touchend',  function (evt) {

    if (menuOverlay.has('.menu-overlay--show') && !navToggleBtn.is(evt.target)
      && navToggleBtn.has(evt.target).length === 0 || closeMenuBtn.is(evt.target) ){
      if (!navWrap.is(evt.target) && navWrap.has(evt.target).length === 0 || closeMenuBtn.is(evt.target) ) {
        menuOverlay.removeClass('menu-overlay--show');
        navToggleBtn.removeClass('is-active');
        navWrap.removeClass('canvas-menu--open');
        
        try {
          bodyScrollLock.clearAllBodyScrollLocks();
        } catch (e) {
          console.log(`Body Scroll Lock can't Close ---> ${e}`);
        }
      }
    }
  });
})();

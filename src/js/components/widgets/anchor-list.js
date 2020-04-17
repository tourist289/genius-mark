(function () {

  const anchorList = $('.js-anchor-list');

  if (anchorList.length !== 1) {
    return
  }

  const anchors = anchorList.find('.js-anchor__item');
  const offset = 200;
  let offsetsList = getOffsetList(anchors);
  let oldIndex = -1;


  anchors.click(function (e) {
    let $target = $($(this).attr('href'));
    e.preventDefault();

    if ($target.length === 0) {
      return;
    }

    $('html, body').animate({scrollTop: $target.offset().top - offset});
  });

  function scrollHandler() {
    const newIndex = getScrollPosition();
    if (oldIndex !== newIndex) {

      anchors.removeClass('active');
      anchors.eq(newIndex).addClass('active');
      oldIndex = newIndex;
    }
  }

  function getScrollPosition() {
    let scrollTop = $(window).scrollTop() + offset * 2;
    for (let i = anchors.length - 1; i > 0; i--) {
      if (scrollTop >= offsetsList[i]) {
        return i;
      }
    }
    return 0;
  }

  function getOffsetList(anchors) {
    let offsets = [];
    anchors.each(function (i, elem) {
      let href = $(elem).attr('href');
      let current = $(href).offset().top;

      offsets = [...offsets, current]

    });
    return offsets;
  }

  $(window).scroll(scrollHandler);

  setInterval(function () {
    offsetsList = getOffsetList(anchors);
  }, 600)
})();

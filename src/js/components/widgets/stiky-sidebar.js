//JS
(function () {
  let jsAside = document.querySelector('#js-aside'),
    jsArticle = document.querySelector('#js-article'),
    elementDiv = null;
  const topIndent = 20; // top indent
  startBodyScrollHandler();

  if (window.innerWidth <= 768) stopBodyScrollHandler();

  window.addEventListener('resize', function () {
    window.innerWidth <= 768 ? stopBodyScrollHandler() : startBodyScrollHandler()
  });

  function bodyScrollHandler() {
    if (elementDiv == null) {
      let elementStyles = getComputedStyle(jsAside, ''),
        allStyles = '';
      for (let i = 0; i < elementStyles.length; i++) {
        if (elementStyles[i].indexOf('overflow') === 0 || elementStyles[i].indexOf('padding') === 0 ||
          elementStyles[i].indexOf('border') === 0 || elementStyles[i].indexOf('outline') === 0 ||
          elementStyles[i].indexOf('box-shadow') === 0 || elementStyles[i].indexOf('background') === 0) {
          allStyles += `${elementStyles[i]}: ${elementStyles.getPropertyValue(elementStyles[i])};`
        }
      }

      elementDiv = document.createElement('div');
      elementDiv.style.cssText = `${allStyles} box-sizing: border-box; width:${jsAside.offsetWidth}px;`;
      jsAside.insertBefore(elementDiv, jsAside.firstChild);

      let l = jsAside.childNodes.length;
      for (let i = 1; i < l; i++) {
        elementDiv.appendChild(jsAside.childNodes[1]);
      }
      jsAside.style.height = `${elementDiv.getBoundingClientRect().height}px`;
    }

    let elementDivHeight = elementDiv.getBoundingClientRect().height,
        asideOffsetTop = jsAside.getBoundingClientRect().top,
        articleOffsetBottom = jsArticle.getBoundingClientRect().bottom,
        fullHeight = Math.round(asideOffsetTop + elementDivHeight - articleOffsetBottom);

    if ((asideOffsetTop - topIndent) <= 0) {
      if ((asideOffsetTop - topIndent) <= fullHeight) {
        elementDiv.className = 'js-sticky--stop';
        elementDiv.style.top = `-${fullHeight}px`;
      } else {
        elementDiv.className = 'js-sticky';
        elementDiv.style.top = topIndent + 'px';
      }
    } else {
      elementDiv.className = '';
      elementDiv.style.top = '';
    }
    window.addEventListener('resize', function () {
      jsAside.children[0].style.width = getComputedStyle(jsAside, '').width
    });
  }

  function startBodyScrollHandler() {
    window.addEventListener('scroll', bodyScrollHandler);
    document.body.addEventListener('scroll', bodyScrollHandler);
  }

  function stopBodyScrollHandler() {
    window.removeEventListener('scroll', bodyScrollHandler);
    document.body.removeEventListener('scroll', bodyScrollHandler);
  }

})();

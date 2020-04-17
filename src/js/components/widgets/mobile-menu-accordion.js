(function () {
  let menuItems = Array.from( document.querySelectorAll(".js-mobile-accordion") );

  if (menuItems.length){
    menuItems.forEach(item => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    })
  }

})();

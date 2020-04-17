module.exports = function (selector) {
  for (let container of document.querySelectorAll(selector)) {
    new k0Tabs(container);
  }
};

class k0Tabs {
  constructor (container) {
    this.container = container;
    this.init();
  }
  init () {
    this.toggles = this.container.querySelectorAll('.js-tabs__nav');
    this.tabs = this.container.querySelectorAll('.js-tabs__item');
    if (!this.isEverythingOk()) {
      return;
    }

    for (let index = 0; index < this.toggles.length; index++) {
      new k0Tab (this, this.toggles[index], this.tabs[index]);
    }
  }
  isEverythingOk () {
    if (this.toggles.length !== this.tabs.length) {
      console.warn('Tabs toggles and tabs amounts are not matching');
      return false;
    } else if (this.toggles.length === 0) {
      console.warn('There\'s no toggles for tabs');
      return false;
    } else if (this.tabs.length === 0) {
      console.warn('There\'s no content tabs');
      return false;
    }
    return true;
  }
}

class k0Tab {
  constructor (tabs, toggle, tab) {
    this.tabs = tabs;
    this.toggle = toggle;
    this.tab = tab;
    this.init();
  }
  init () {
    if (this.toggle.classList.contains('tabs__nav--active')) {
      this.open();
    } else {
      this.close();
    }

    this.toggle.addEventListener('click', () => {
      this.open();
    });
  }
  open () {
    if (this.tabs.active === this) {
      // already open
      return;
    }
    if (this.tabs.active) {
      this.tabs.active.close();
    }
    this.tabs.active = this;
    this.tab.classList.add('active');
    this.toggle.classList.add('tabs__nav--active');
  }
  close () {
    this.tab.classList.remove('active');
    this.toggle.classList.remove('tabs__nav--active');
  }
}

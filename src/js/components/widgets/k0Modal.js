class KoModal {
  constructor () {
    this.currentModal = this.currentModal; // приватная переменная "#thankModal"
    this.bodyElement = document.querySelector('body');
    this.MODAL_OVERLAY = `modal__overlay`;
    this.MODAL_OPEN = `modal-open`;

    this._init();
  }

  _init() {
    //************ START window.MODAL.call
    let openModalButtons = Array.from(document.querySelectorAll('.js-modal'));
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.open(button.dataset.modal);
      })
    });

    //============ CLOSE on "close" button

    this.bodyElement.addEventListener('click',  (evt) => {
      let target = evt.target;

      if (this.checkClassList) {
        if (target.classList.contains('modal__overlay')) {
          this.close();
        }
      }
    });

    let closeBtn = document.querySelectorAll('.js-modal__close');
    Array.from(closeBtn).forEach( (btn) => {
      btn.addEventListener('click', (evt) => {
        let target = evt.target;

        if (target.childNodes || target) {
          this.close();
        }
      });
    });
  }

  set id(id) {
    this.currentModal = id;
  }

  get id() {
    return this.currentModal;
  }

  open(id) { //============ OPEN
    let modalPrev = this.id;
    let modalId = document.querySelector(id);

    if (modalPrev) this.close();

    this.id = id;

    if ( !modalId.parentElement.classList.contains(this.MODAL_OVERLAY) ) {
      let modalWrap = document.createElement('div');

      modalWrap.classList.add(this.MODAL_OVERLAY);
      modalId.parentNode.insertBefore(modalWrap, modalId);
      modalWrap.appendChild(modalId);
    }

    setTimeout( () => {
      let modal = document.querySelector(id);
      let overlay = modal.parentElement;

      modal.style.display = 'block';
      overlay.classList.add('fadeOut');
      modal.classList.add('fadeOut');
      this._setPosition();
      this.bodyElement.classList.add(this.MODAL_OPEN);

      try {
        bodyScrollLock.disableBodyScroll(overlay);
      } catch (e) {
        console.log(`Body Scroll Lock can't Call ---> ${e}`);
      }
    }, 300);

    window.addEventListener("resize", this._onOpenPopupResize.bind(this));
    document.addEventListener('keydown', this._onPopupEscPress.bind(this));
  }

  close() { //============ CLOSE
    let modal = document.querySelector( this.id );
    let overlay = modal.parentElement;

    try {
      bodyScrollLock.clearAllBodyScrollLocks();
    } catch (e) {
      console.log(`Body Scroll Lock can't Close ---> ${e}`);
    }

    overlay.classList.remove('fadeOut');
    modal.classList.remove('fadeOut');
    this.bodyElement.classList.remove(this.MODAL_OPEN);
    setTimeout(function () {
      modal.removeAttribute('style');
    }, 250);

    window.removeEventListener("resize", this._onOpenPopupResize.bind(this));
    document.removeEventListener('keydown', this._onPopupEscPress.bind(this));
  }

  _setPosition() { //========= Position
    let modal = document.querySelector( this.id ),
      position = {
        opacity: 1
      };

    setTimeout(function () {
      if (modal.clientHeight > window.innerHeight) {
        // "TOP"
        position['top'] = '20px';
        position['marginTop'] = 0;
      } else {
        // "CENTER"
        position['top'] = `${window.innerHeight / 2}px`;
        position['marginTop'] = `-${modal.clientHeight / 2}px`;
      }

      modal.style.top = position.top;
      modal.style.marginTop = position.marginTop;
      modal.style.opacity = position.opacity;
    }, 200);
  }

  get checkClassList() {
     return this.bodyElement.classList.contains(this.MODAL_OPEN)
  }

  _onPopupEscPress(evt) {
    if (this.checkClassList) {
      if (evt.keyCode === 27) this.close();
    }
  }

  _onOpenPopupResize () {
    if (this.checkClassList) {
      this._setPosition()
    }
  }
}

export default KoModal;

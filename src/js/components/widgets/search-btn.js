;(function () {
  // let formClassOpen = 'js-form-search--open';
  // let form = document.querySelector('.js-form-search');
  // let formBtn = form.querySelector('button');
  //
  // formBtn.addEventListener('click', function (env) {
  //   env.preventDefault();
  //
  //   let parent = this.parentElement,
  //     input = parent.querySelector('input'),
  //     val = input.value,
  //     formOpen = parent.classList.contains(formClassOpen);
  //
  //   if(!formOpen){
  //     parent.classList.add(formClassOpen);
  //     setTimeout( () => input.focus(), 1)
  //   }else if(formOpen && val.length === 0){
  //     parent.classList.remove(formClassOpen);
  //   }else if(formOpen && val.length > 0){
  //     parent.submit();
  //   }
  // });
  //
  // document.addEventListener('click', function (env) {
  //   if (form !== env.target && !form.contains(env.target)) {
  //     form.classList.remove(formClassOpen);
  //   }
  // });
  //
  // document.addEventListener('touchend', function (env) {
  //   if (form !== env.target && !form.contains(env.target)) {
  //     form.classList.remove(formClassOpen);
  //   }
  // });

    let formClassOpen = 'js-form-search--open';
    let form = $('.js-form-search');
    let formBtn = form.find('button');

    $(formBtn).on('click', function (env) {
        env.preventDefault();

        let parent = $(this).parent(form),
            value = parent.find('input').val(),
            formOpen = parent.hasClass(formClassOpen);

        if (!formOpen) {
            parent.addClass(formClassOpen);
            setTimeout(() => parent.find('input').focus(), 1)
        }else if(formOpen && value.length === 0){
            parent.removeClass(formClassOpen);
        }else if(formOpen && value.length > 0){
            parent.submit();
        }
    });


    $(window).on('click touchend',  function (evt) {
        let form = $('.js-form-search');
        let target = evt.target;

        if (!form.is(target) && form.has(target).length === 0) {
            form.removeClass(formClassOpen);
        }
    });

  //<form class=" js-form-search">
  //  <input type="search" class="form-search__input"  name="q">
  //  <button class="form-search__btn"><i class="icon-loop"></i></button>
  //</form>

// .form-search{
//     position: relative;
//     max-width: 70px;
//     display: inline-block;
//   }
//
// .form-search__input{
//     box-sizing: border-box;
//     position: absolute;
//     display: flex;
//     top: 0;
//     right: 0;
//     width: 0;
//     height: 40px;
//     visibility: hidden;
//     opacity: 0;
//     transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
//   }
//
// .form-search__btn{
//     min-width: auto;
//     padding: 0;
//     width: 40px;
//     height: 40px;
//     svg{
//       position: absolute;
//       top: 6px;
//       left: 6px;
//       width: 25px;
//       height: 25px;
//     }
//
//   &:hover,&:focus{
//       border-color: #454545;
//     }
//   }
//
//
// .js-form-search--open{
//
//   .form-search__input{
//       right: 100%;
//       min-width: 250px;
//       visibility: visible;
//       opacity: 1;
//     }
//   }

})();

(function () {
    $('.js-anchor').on('click', function(e){
        e.preventDefault();
        let t = 700;
        let d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
})();

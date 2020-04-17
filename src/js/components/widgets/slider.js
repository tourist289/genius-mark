(function(){
    //************ SLICK SLIDER
    // **** next - prev buttons for sliders
    $('.js-prev').on('click', function(){
        $(this).closest('[data-rel=slider]').find('.slider').slick('slickPrev');
    });
    $('.js-next').on('click', function(){
        $(this).closest('[data-rel=slider]').find('.slider').slick('slickNext');
    });
    //======= END next - prev buttons for sliders
    $('.js-slider_1').slick(getSliderSettings_1());
    $('.js-slider_3').slick(getSliderSettings_3());
    $('.js-slider_4').slick(getSliderSettings_4());
    $('.js-slider_6').slick(getSliderSettings_6);

    $('.js-slider_fw').slick(getSliderFWSettings());

    $('.js_slider-nav').slick(getSliderThumbnailNav('.js_slider-for'));
    $('.js_slider-for').slick(getSliderThumbnailFor());

    function getSliderThumbnailNav(sliderFor){
        return {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: sliderFor,
            dots: false,
            centerMode: true,
            vertical: true,
            focusOnSelect: true,
            arrows: false
        }
    }
    function getSliderThumbnailFor(){
        return {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true
        }
    }

    function getSliderFWSettings(){
        return {
            slidesToShow:1,
            slidesToScroll:1,
            arrows: false,
            dots: false,
            focusOnSelect:true,
            autoplay: false
        }
    }
    function getSliderSettings_1(){
        return {
            slidesToShow:1,
            slidesToScroll:1,
            arrows: false,
            dots: false,
            focusOnSelect:true,
            autoplay: false,
            swipe: false,
            responsive:[
                // {
                //     breakpoint: 770,
                //     settings:{
                //         swipe: true
                //     }
                // }
            ]
        }
    }
    function getSliderSettings_3(){
        return {
            slidesToShow:3,
            slidesToScroll:1,
            arrows: false,
            dots: false,
            focusOnSelect:true,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 1100,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 900,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 768,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 576,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                }
            ]
        }
    }
    function getSliderSettings_4(){
        return {
            slidesToShow:4,
            slidesToScroll:1,
            arrows: false,
            dots: false,
            focusOnSelect:true,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 991,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 760,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 550,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                }
            ]
        }
    }
    function getSliderSettings_6(){
        return {
            slidesToShow:6,
            slidesToScroll:3,
            arrows: false,
            dots: false,
            focusOnSelect:true,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 1100,
                    settings:{
                        slidesToShow: 5,
                        slidesToScroll:3,
                        swipe: false
                    }
                },
                {
                    breakpoint: 990,
                    settings:{
                        slidesToShow:4,
                        slidesToScroll:3,
                        swipe: false
                    }
                },
                {
                    breakpoint: 700,
                    settings:{
                        slidesToShow:3,
                        slidesToScroll:3,
                        swipe: false
                    }
                },
                {
                    breakpoint: 550,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:2,
                        swipe: false
                    }
                },
                {
                    breakpoint: 400,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,
                        swipe: false
                    }
                }
            ]
        }
    }
    //============ END  SLICK SLIDER
})();
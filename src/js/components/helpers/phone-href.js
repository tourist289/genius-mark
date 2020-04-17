(function () {
    window.addEventListener('load', function () {
        let phones =  Array.apply(null, document.querySelectorAll('.js_numInHref'));

        replacePhone(phones);
    });

    function replacePhone(phones){
        phones.forEach( phone => {
            let phoneText = phone.text.replace(/[^0-9]/g, "");
            phone.setAttribute('href', `tel:${phoneText}`);
        });
    }
})();

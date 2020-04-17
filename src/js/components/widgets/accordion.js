(function () {
    const accordionItem = document.querySelectorAll('.js-accordion__item');

    const onClickAccordionHeader = e => {
        if (e.currentTarget.parentNode.classList.contains('active')) {
            e.currentTarget.parentNode.classList.remove("active");
        } else {
            Array.prototype.forEach.call(accordionItem, (e) => {
                e.classList.remove('active');
            });
            e.currentTarget.parentNode.classList.add("active");
        }
    };

    const init = () => {
        Array.prototype.forEach.call(accordionItem, (e) => {
            e.querySelector('.js-accordion__header').addEventListener('click', onClickAccordionHeader, false);
        });
    };

    document.addEventListener('DOMContentLoaded', init);
})();

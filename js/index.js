document.addEventListener('DOMContentLoaded', function() {

    document.querySelector(".header-burger__open").addEventListener("click", function() {
        document.querySelector(".header-burger__menu").classList.add("active");
    });
    document.querySelector(".header-burger__closed").addEventListener("click", function() {
        document.querySelector(".header-burger__menu").classList.remove("active");
    });

    const container = document.querySelector(".hero__container")
    const swiper = new Swiper('.hero__swiper', {
        // Default parameters

        speed: 300,
        pagination: {
            el: '.hero__pagination',
            type: 'bullets',
            clickable: true
        }

    })

    $(function() {
        $(".faq-list").accordion({
            icons: false,
            heightStyle: "content",
            collapsible: true,
            active: false
        });

    });

    document.querySelectorAll('.how-list__button').forEach(function(howbutton) {
        howbutton.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.how-list__button').forEach(function(btn) {
                btn.classList.remove('how-list__button--active')
            })
            event.currentTarget.classList.add('how-list__button--active')

            document.querySelectorAll('.how-description__item').forEach(function(howtext) {
                howtext.classList.remove('how-description--active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('how-description--active')
        })

    })


    document.querySelector(".header__search").addEventListener("click", function() {
        document.querySelector(".header-form__block").classList.add("header-form__active");

    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        let form = document.querySelector(".header-form__block");
        if (!target.closest(".header__content")) {
            form.classList.remove("header-form__active");
            form.querySelector("input").value = "";
            document.querySelector(".header__search").classList.remove("active")
        }


    })

    document.querySelector(".header-form__close").addEventListener("click", function() {
        document.querySelector(".header-form__block").classList.remove("header-form__active");

    })





})

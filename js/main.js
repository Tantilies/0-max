const popUpButton = document.querySelector('.pop-up_link');
const popUp = document.querySelector('.pop-up__list');
const popUpLinks = document.querySelectorAll('.pop-up__item_link');
const menuLinks = document.querySelectorAll('.item_menu');
const modal = document.querySelector('.modal__contact');
const body = document.querySelector('body');
const modalButton = document.querySelector('.modal_buton');
const modalWrapper = document.querySelector('.modal__wrapper');
const input = document.querySelector('.form__input');
const form = document.querySelector('.header__bottom_form');
const formButton = document.querySelector('.form__button');
const itemsProperty = document.querySelectorAll('.properties__item');
const menuButton = document.querySelector('.header__menu_button');
const menu = document.querySelector('.header__menu');

if(popUpButton) {
    popUpButton.addEventListener('click', function(){
        popUp.classList.toggle('_active');
        popUpButton.classList.toggle('_active');
    })
};

if(popUpLinks.length > 0) {
    popUpLinks.forEach(popUpLink =>{
        popUpLink.addEventListener('click', function(){
             window.scrollTo({
                top: $(".properties__title").offset().top - $(window).scrollTop(),
                left: 0,
                behavior: 'smooth'
             })
             popUpLink.classList.add('_open');
            for(let i = 0; i < popUpLinks.length; i++) {
                if(popUpLinks[i].classList.contains('_open')) {
                    itemsProperty.forEach(itemProperty => {
                        if(itemProperty.classList.contains('item-1') && popUpLinks[i].classList.contains('link-1')) {
                            itemProperty.classList.add('_active');
                            body.classList.add('_lock');
                            body.classList.add('_block');
                        } else if(itemProperty.classList.contains('item-2') && popUpLinks[i].classList.contains('link-2')) {
                            itemProperty.classList.add('_active');
                            body.classList.add('_lock');
                            body.classList.add('_block');
                        } else if(itemProperty.classList.contains('item-3') && popUpLinks[i].classList.contains('link-3')) {
                            itemProperty.classList.add('_active');
                            body.classList.add('_lock');
                            body.classList.add('_block');
                        }
                    })
                }
            }
            popUp.classList.remove('_active');
            popUpButton.classList.remove('_active');
            for(let i = 0; i < menuLinks.length; i++) {
                if(menuLinks[i].classList.contains('_active')) {
                    menuLinks[i].classList.remove('_active');
                }
            }
            menuButton.classList.remove('_active');
            menu.classList.remove('_active');
            menuLinks[0].classList.add('_active');
        })
    })
};

if(menuLinks.length > 0) {
        menuLinks[0].classList.add('_active');
        menuLinks.forEach(menuLink =>{
            menuLink.addEventListener('click', function(){
                for(let i = 0; i < menuLinks.length; i++) {
                    if(menuLinks[i].classList.contains('_active')) {
                        menuLinks[i].classList.remove('_active');
                    }                 
                }
                menuLink.classList.add('_active');
                popUp.classList.remove('_active');
                popUpButton.classList.remove('_active');
                menuButton.classList.remove('_active');
                menu.classList.remove('_active'); 
                body.classList.remove('_lock'); 
            })
        })
    };

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', function(){
            for(let i = 0; i < menuLinks.length; i++) {
                if(menuLinks[i].classList.contains('_active') && menuLinks[i].classList.contains('modal')) {
                    modal.classList.add('_active');
                    body.classList.add('_lock');
                    modalWrapper.classList.add('_active');
                    menuButton.classList.remove('_active');
                    menu.classList.remove('_active');
                }                 
            }
        })
    })
};

if(modal) {
    modalButton.addEventListener('click', function(){
        body.classList.remove('_lock');
        modal.classList.remove('_active');
        modalWrapper.classList.remove('_active');
        for(let i = 0; i < menuLinks.length; i++) {
            if(menuLinks[i].classList.contains('_active')) {
                menuLinks[i].classList.remove('_active');
            }
            menuLinks[0].classList.add('_active');                
        }
    })
    document.addEventListener('keydown', function(e){
        if(e.keyCode == 27 && modal.classList.contains('_active')) {
            body.classList.remove('_lock');
            modal.classList.remove('_active');
            modalWrapper.classList.remove('_active');
            for(let i = 0; i < menuLinks.length; i++) {
                if(menuLinks[i].classList.contains('_active')) {
                    menuLinks[i].classList.remove('_active');
                }                 
            }
            menuLinks[0].classList.add('_active');
        } else if(e.keyCode == 27 && itemsProperty) {
            itemsProperty.forEach(itemProperty => {
                if(itemProperty.classList.contains('_active')) {
                    itemProperty.classList.remove('_active');
                    body.classList.remove('_lock');
                    popUpLinks.forEach(popUpLink => {
                        if(popUpLink.classList.contains('_open')) {
                            popUpLink.classList.remove('_open');
                        }
                    })
                }
            })
        }
    })
    modalWrapper.addEventListener('click', function(){
        body.classList.remove('_lock');
        modal.classList.remove('_active');
        modalWrapper.classList.remove('_active');
        for(let i = 0; i < menuLinks.length; i++) {
            if(menuLinks[i].classList.contains('_active')) {
                menuLinks[i].classList.remove('_active');
            }                 
        }
        menuLinks[0].classList.add('_active');
    })
};

input.addEventListener('click', function(){
    form.classList.add('_active');
    formButton.classList.add('_active');
    body.classList.add('_lock');
})


formButton.addEventListener('click', function(){
    form.classList.remove('_active');
    formButton.classList.remove('_active');
    body.classList.remove('_lock');
})

document.addEventListener('click', e =>{
    const click = e.composedPath().includes(form);
    if(!click) {
        if(form.classList.contains('_active')) {
            body.classList.remove('_lock');
            form.classList.remove('_active');
            formButton.classList.remove('_active');
            body.classList.remove('_lock');
            document.getElementById('inputText').value = '';
        }
    }
})


itemsProperty.forEach(itemProperty => {
    itemProperty.addEventListener('click', function(){
        itemProperty.classList.add('_active');
        popUpLinks.forEach(popUpLink => {
            if(popUpLink.classList.contains('link-1') && itemProperty.classList.contains('item-1')) {
                popUpLink.classList.add('_open');
            } else if(popUpLink.classList.contains('link-2') && itemProperty.classList.contains('item-2')) {
                popUpLink.classList.add('_open');
            } else if(popUpLink.classList.contains('link-3') && itemProperty.classList.contains('item-3')) {
                popUpLink.classList.add('_open');
            }
        })
        window.scrollTo({
            top: $(".properties__title").offset().top,
            left: 0,
            behavior: 'smooth'
        })
        body.classList.add('_lock');
        body.classList.add('_block');
    })
});

document.addEventListener('click', e => {
    itemsProperty.forEach(itemProperty => {
        if(itemProperty.classList.contains('_active')) {
            let itemPropertyActive = itemProperty;
            const click = e.composedPath().includes(itemPropertyActive);
            popUpLinks.forEach(popUpLink => {
                if(popUpLink.classList.contains('_open')) {
                    let popUpLinkOpen =e.composedPath().includes(popUpLink);
                    if(!click && !popUpLinkOpen) {
                        itemProperty.classList.remove('_active');
                        body.classList.remove('_lock');
                        body.classList.remove('_block');
                        popUpLink.classList.remove('_open');
                    }
                }
            })
        } 
    })
});

  var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    responsive:{
        0:{
            items:1,
            margin: 15,
        },
        700:{
            items:2,
            margin: 0,
        },
        1000:{
            items:3,
            margin: 49,
        }
    } 
});
$('.slider__button_next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider__button_prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
})
















    








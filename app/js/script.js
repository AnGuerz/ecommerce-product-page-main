const main_section_big_img = document.querySelector('.main__section--shoes__big--image')
const main_section_imgs = document.querySelectorAll('.main__section--shoes__thumbnails--thumbnail')

for (let i = 0; i < main_section_imgs.length; i++) {
    const section_img = main_section_imgs[i]
    section_img.addEventListener('click', function() {
        main_section_imgs.forEach(img => img.classList.remove('selected'))
        var imgchild = section_img.querySelector('img')
        main_section_big_img.src = imgchild.src
        section_img.classList.add('selected')
    })
}

const main_nav_big_img = document.querySelector('.main__nav--cont__whole__img')
const main_nav_imgs = document.querySelectorAll('.main__nav--cont__additional--thumbnail')
const closeBtn = document.querySelector('.main__nav--cont__close')
const main_nav = document.querySelector('.main__nav')

main_section_big_img.addEventListener('click', function() {
    for (let i = 0; i < main_nav_imgs.length; i++) {
        const nav_img = main_nav_imgs[i]
        var imgChild = nav_img.querySelector('img')
        nav_img.classList.remove('selected')
        if (imgChild.src === main_section_big_img.src) {
            main_nav_big_img.src = imgChild.src
            nav_img.classList.add('selected')
        } else {
            continue
        } 
    }
    main_nav.style.visibility = 'visible'
    main_nav.style.opacity = 1
})

for (let i = 0; i < main_nav_imgs.length; i++) {
    const nav_img = main_nav_imgs[i]
    nav_img.addEventListener('click', function() {
        main_nav_imgs.forEach(img => img.classList.remove('selected'))
        var imgchild = nav_img.querySelector('img')
        main_nav_big_img.src = imgchild.src
        nav_img.classList.add('selected')
    })
}

const nextBtn = document.querySelector('.main__nav--cont__whole__next')
const prevBtn = document.querySelector('.main__nav--cont__whole__previous')

nextBtn.addEventListener('click', function() {
    var current_select = 0

    for (let i = 0; i < main_nav_imgs.length; i++) {
        const nav_img = main_nav_imgs[i]
        if (nav_img.classList.contains('selected')) {
            current_select = i
        }
    }
    main_nav_imgs.forEach(img => img.classList.remove('selected'))
    if (current_select === 3) {
        main_nav_imgs[current_select].classList.add('selected')
        main_nav_big_img.src = main_nav_imgs[current_select].querySelector('img').src
    } else {
        main_nav_imgs[current_select + 1].classList.add('selected')
        main_nav_big_img.src = main_nav_imgs[current_select + 1].querySelector('img').src
    }
})

prevBtn.addEventListener('click', function() {
    var current_select = 0

    for (let i = 0; i < main_nav_imgs.length; i++) {
        const nav_img = main_nav_imgs[i]
        if (nav_img.classList.contains('selected')) {
            current_select = i
        }
    }
    main_nav_imgs.forEach(img => img.classList.remove('selected'))
    if (current_select === 0) {
        main_nav_imgs[current_select].classList.add('selected')
        main_nav_big_img.src = main_nav_imgs[current_select].querySelector('img').src
    } else {
        main_nav_imgs[current_select - 1].classList.add('selected')
        main_nav_big_img.src = main_nav_imgs[current_select - 1].querySelector('img').src
    }
})




closeBtn.addEventListener('click', function() {
    for (let i = 0; i < main_section_imgs.length; i++) {
        const section_img = main_section_imgs[i]
        var imgChild = section_img.querySelector('img')
        section_img.classList.remove('selected')
        if (imgChild.src === main_nav_big_img.src) {
            main_section_big_img.src = imgChild.src
            section_img.classList.add('selected')
        } else {
            continue
        } 
    }
    main_nav.style.visibility = 'hidden'
    main_nav.style.opacity = 0
})

const cartBtn = document.querySelector('.header__cartavatar--cart__cart')
const div_elmts = document.querySelector('.header__cartavatar--cart__elements')

cartBtn.addEventListener('click', function() {
    div_elmts.classList.toggle('opened')
})

const addBtn = document.querySelector('.main__section--text__buttons--add-remove__add')
const removeBtn = document.querySelector('.main__section--text__buttons--add-remove__remove')
const number_articles = document.querySelector('.main__section--text__buttons--add-remove__number')

addBtn.addEventListener('click', function() {
    number_articles.innerHTML = parseInt(number_articles.innerHTML, 10) + 1
})

removeBtn.addEventListener('click', function() {
    number_articles.innerHTML = parseInt(number_articles.innerHTML, 10) - 1
})

const cart_articles = document.querySelector('.header__cartavatar--cart__nbarticles')
const add_to_cartBtn = document.querySelector('.main__section--text__buttons--addtocart')

const div_elmts_content = document.querySelector('.header__cartavatar--cart__elements__content')
const price = document.querySelector('.main__section--text__promo--valuepercent__value')
const title_product = document.querySelector('.main__section--text__title--product')

add_to_cartBtn.addEventListener('click', function() {
    cart_articles.innerHTML = parseInt(cart_articles.innerHTML, 10) + parseInt(number_articles.innerHTML, 10)
    number_articles.innerHTML = 0
    
    if (cart_articles.innerHTML == 0) {
        cart_articles.style.visibility = 'hidden'
        cart_articles.style.opacity = 0
    } else {
        cart_articles.style.visibility = 'visible'
        cart_articles.style.opacity = 1
        div_elmts_content.innerHTML = ''

        const div_article1 = document.createElement('div')
        const div_article2 = document.createElement('a')

        div_article1.classList.add('header__cartavatar--cart__elements__content--imgtexttrash')
        div_article2.classList.add('header__cartavatar--cart__elements__content--checkout')

        const div_article1_img = document.createElement('img')

        const div_article1_text = document.createElement('div')
        const div_article1_text_title = document.createElement('p')
        const div_article1_text_prices = document.createElement('div')
        const div_article1_text_prices_price = document.createElement('p')
        const div_article1_text_prices_total = document.createElement('p')

        div_article1_text_prices.appendChild(div_article1_text_prices_price)
        div_article1_text_prices.appendChild(div_article1_text_prices_total)

        div_article1_text_prices_price.classList.add('header__cartavatar--cart__elements__content--imgtexttrash__text--prices__price')
        div_article1_text_prices_total.classList.add('header__cartavatar--cart__elements__content--imgtexttrash__text--prices__total')

        div_article1_text_title.innerHTML = title_product.innerHTML
        div_article1_text_prices_price.innerHTML = price.innerHTML + ' x ' + cart_articles.innerHTML
        div_article1_text_prices_total.innerHTML = '$' + parseFloat(price.innerHTML.replace('$', ''))*parseFloat(cart_articles.innerHTML) + '.00'


        div_article1_text.appendChild(div_article1_text_title)
        div_article1_text.appendChild(div_article1_text_prices)

        const div_article1_trash = document.createElement('img')

        div_article1_img.classList.add('header__cartavatar--cart__elements__content--imgtexttrash__img')
        div_article1_text.classList.add('header__cartavatar--cart__elements__content--imgtexttrash__text')
        div_article1_trash.classList.add('header__cartavatar--cart__elements__content--imgtexttrash__trash')

        div_article1_trash.addEventListener('click', function() {
            div_article1.remove()
            div_article2.remove()
            parag = document.createElement('p')
            parag.innerHTML = 'Your cart is empty'
            div_elmts_content.appendChild(parag)
            cart_articles.innerHTML = 0
            cart_articles.style.opacity = 0
            cart_articles.style.visibility = 'hidden'
        })

        div_article1_img.src = './images/image-product-1-thumbnail.jpg'
        div_article1_trash.src = './images/icon-delete.svg'

        div_article1.appendChild(div_article1_img)
        div_article1.appendChild(div_article1_text)
        div_article1.appendChild(div_article1_trash)

        div_article2.innerHTML = 'Checkout'
        div_article2.href = '#'

        div_elmts_content.appendChild(div_article1)
        div_elmts_content.appendChild(div_article2)
    }
})

const burger = document.querySelector('.header__burgerlogo--burger')
const menu = document.querySelector('.header__menu')
const menu_closeBtn = document.querySelector('.header__menu--btn')

burger.addEventListener('click', function() {
    menu.style.display = 'block'
})

menu_closeBtn.addEventListener('click', function() {
    menu.style.display = 'none'
})

const nextBtn2 = document.querySelector('.main__section--shoes__big--next')
const prevBtn2 = document.querySelector('.main__section--shoes__big--previous')

nextBtn2.addEventListener('click', function() {
    var current_select = 0

    for (let i = 0; i < main_section_imgs.length; i++) {
        const section_img = main_section_imgs[i]
        if (section_img.classList.contains('selected')) {
            current_select = i
        }
    }
    main_section_imgs.forEach(img => img.classList.remove('selected'))
    if (current_select === 3) {
        main_section_imgs[current_select].classList.add('selected')
        main_section_big_img.src = main_section_imgs[current_select].querySelector('img').src
    } else {
        main_section_imgs[current_select + 1].classList.add('selected')
        main_section_big_img.src = main_section_imgs[current_select + 1].querySelector('img').src
    }
})

prevBtn2.addEventListener('click', function() {
    var current_select = 0

    for (let i = 0; i < main_section_imgs.length; i++) {
        const section_img = main_section_imgs[i]
        if (section_img.classList.contains('selected')) {
            current_select = i
        }
    }
    main_section_imgs.forEach(img => img.classList.remove('selected'))
    if (current_select === 0) {
        main_section_imgs[current_select].classList.add('selected')
        main_section_big_img.src = main_section_imgs[current_select].querySelector('img').src
    } else {
        main_section_imgs[current_select - 1].classList.add('selected')
        main_section_big_img.src = main_section_imgs[current_select - 1].querySelector('img').src
    }
})
// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show-menu');
}
navLink.forEach(x=>x.addEventListener('click', linkAction));

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >= 80 ?
        header.classList.add('scroll-header') : header.classList.remove('scroll-header')
    
}
window.addEventListener('scroll', scrollHeader);

// QUESTION ACCORDION
const accordionItems = document.querySelectorAll('.question__item');

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.question__header');

    accordionHeader.addEventListener('click', () => {
        const opentItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if(opentItem && opentItem !== item){
            toggleItem(opentItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.question__content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        sectionID = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            console.log(document.querySelector('.nav__menu a[href*=' + sectionID + ']'))
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SHOW SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 200){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}
const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__text');
sr.reveal('.home__img', {delay: 500});
sr.reveal('.home__social', {delay: 600});
sr.reveal('.about__img, .contact__box', {origin: 'left'});
sr.reveal('.about__text, .contact__form', {origin: 'right'});
sr.reveal('.steps__card, .product__card, .question__group, .footer', {interval: 100});

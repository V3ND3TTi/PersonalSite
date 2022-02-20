const menu = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-nav');
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
        mobile.classList.remove('hidden');
    }
    else {
        mobile.classList.add('hidden');
    }
});
mobile.addEventListener('click', () => {
    mobile.classList.add('hidden');
    menu.classList.toggle('is-active');
});

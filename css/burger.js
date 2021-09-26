const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.nav-text');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();
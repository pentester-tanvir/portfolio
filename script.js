const nav_t = document.querySelector('.nav-toogle');
const list = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_link');

nav_t.addEventListener('click', () => {

    list.classList.toggle('show');
    nav_t.querySelector('i').classList.toggle('fa-xmark');
    nav_t.querySelector('i').classList.toggle('fa-bars');
});

links.forEach(link => {

    link.addEventListener('click', function () {

        if (window.innerWidth <= 768) {
            list.classList.toggle('show');
            nav_t.querySelector('i').classList.toggle('fa-xmark');
            nav_t.querySelector('i').classList.toggle('fa-bars');
        }
    });


});



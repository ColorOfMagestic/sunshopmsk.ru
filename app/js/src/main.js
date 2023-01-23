const body = document.querySelector('body'),
    burgerBtn = document.querySelector('.btn_burger'),
    closeBtn = document.querySelector('.btn_close'),
    mobileMenu = document.querySelector('.mobile_menu'),
    categoryListItems = document.querySelectorAll('.category_list_item'),
    toTopBtn = document.querySelector('[data-role="toTop"]'),
    indicator = document.querySelector('.indicator'),
    favoriteBtns = document.querySelectorAll('.content .card button'),
    inFavoriteBtn = document.querySelector('[data-role="inFavorite"]');
// mobile menu

// console.log(inFavoriteBtn);

const closeMenu = () => {
    mobileMenu.classList.remove('mobile_menu--active');
    body.classList.remove('body--hidden');
};

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile_menu--active');
    body.classList.add('body--hidden');
});

document.addEventListener('click', (e) => {
    e.stopPropagation;
    if (e.target.classList.contains('page-body')) {
        closeMenu();
    }
    return;
});

closeBtn.addEventListener('click', closeMenu);

// active el category list

categoryListItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const parent = e.target.parentNode;

        categoryListItems.forEach((item) => {
            item.classList.remove('active');
        });

        parent.classList.add('active');
    });
});

// scroll to top

toTopBtn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// scrollbar

const scrollbar = function () {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    indicator.style.width = scrolled + '%';
};
window.addEventListener('scroll', scrollbar);

// favorite buttons
favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const parent = e.target.parentElement.parentElement;
        if (!parent.classList.contains('btn')) {
            return;
        }
        parent.classList.toggle('active');
    });
});

// zavivkakrd.ru/himzavivka-online/obuchenie-himicheskoj-zavivke-volos
// zavivkakrd.ru/himzavivka-online/kursy-po-biozavivke-volos
// zavivkakrd.ru/himzavivka-online/karving-volos-obuchenie
// zavivkakrd.ru/himzavivka-online/prikornevoj-obyom-flisap-obuchenie

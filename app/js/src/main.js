const body = document.querySelector('body'),
    burgerBtn = document.querySelector('.btn_burger'),
    closeBtn = document.querySelector('.btn_close'),
    mobileMenu = document.querySelector('.mobile_menu'),
    categoryListItems = document.querySelectorAll('.category_list_item'),
    toTopBtn = document.querySelector('[data-role="toTop"]'),
    indicator = document.querySelector('.indicator'),
    favoriteBtns = document.querySelectorAll('.content .card button'),
    inFavoriteBtn = document.querySelector('[data-role="inFavorite"]'),
    favorite = document.querySelector('.favorive_block'),
    favoriteCloseBtn = document.querySelector('.favorive_block .btn_close'),
    cart = document.querySelector('.modal_cart'),
    cartClose = document.querySelector('.modal_cart .modal__close'),
    inCartBtn = document.querySelector('[data-role="inCard"]'),
    selfWrapper = document.querySelector('.self_wrapper'),
    selfWrapperInput = document.querySelector('.self_wrapper input');

// mobile menu

const closeMenu = (blok, cls) => {
    blok.classList.remove(cls);
    body.classList.remove('body--hidden');
};

const openMenu = (blok, cls) => {
    blok.classList.add(cls);
    body.classList.add('body--hidden');
};

burgerBtn.addEventListener('click', () => openMenu(mobileMenu,'mobile_menu--active')
);

document.addEventListener('click', (e) => {
    e.stopPropagation;
    if (e.target.classList.contains('page-body')) {
        closeMenu(mobileMenu,'mobile_menu--active');
    }
    if (e.target.classList.contains('modal__overlay')) {
        closeMenu(cart,'modal--active')
    }
    return;
});

closeBtn.addEventListener('click',()=> closeMenu(mobileMenu,'mobile_menu--active'));

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
        if(e.target.closest('.btn')) {
            btn.classList.toggle('active');
        }
    });
});

// scroll favorite block

inFavoriteBtn.addEventListener('click', ()=> {
    openMenu(favorite,'active');
});


favoriteCloseBtn.addEventListener('click', ()=> {
    closeMenu(favorite,'active');
});

// cart 

inCartBtn.addEventListener('click', ()=> openMenu(cart,'modal--active'));
cartClose.addEventListener('click', ()=> closeMenu(cart,'modal--active'));

selfWrapperInput.addEventListener('focusin', ()=>{
    selfWrapper.classList.add('self');
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

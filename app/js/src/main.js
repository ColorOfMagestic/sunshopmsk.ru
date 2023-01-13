// mobile menu
const body  = document.querySelector('body');
const burgerBtn = document.querySelector('.btn_burger'),
    closeBtn = document.querySelector('.btn_close'),
    mobileMenu = document.querySelector('.mobile_menu');

    const closeMenu = ()=> {
      mobileMenu.classList.remove('mobile_menu--active')
      body.classList.remove('body--hidden')
    }


    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.add('mobile_menu--active')
      body.classList.add('body--hidden')
    })

    document.addEventListener('click', e => {
      e.stopPropagation;
      if(e.target.classList.contains('page-body')) {
        closeMenu();
      }
      return;
    })

    closeBtn.addEventListener('click', closeMenu)

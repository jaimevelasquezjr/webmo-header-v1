const navMenu = document.querySelector('.nav-menu-button');
const mobileNav = document.querySelector('.mobile-main-nav');

navMenu.onclick = () => {
   if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileNav.classList.remove('active');
   } else {
      navMenu.classList.add('active');
      mobileNav.classList.add('active');
   }
};

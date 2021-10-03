import './scss/main.scss';
import Swiper from 'tiny-swiper';
import SwiperAutoplay from 'tiny-swiper/lib/modules/autoPlay';
import SwiperNavigation from 'tiny-swiper/lib/modules/navigation';

let isMenuActive = false;
const ANIMATION_TIMING = 400;
const slideHeading = [
  'Discover innovative ways to decorate',
  'We are available all across the globe',
  'Manufactured with the best materials',
];
const slideText = [
  'We provide unmatched quality, comfort, and style for property owners\
    across the country. Our experts combine form and function in\
    bringing your vision to life. Create a room in your own style with\
    our collection and make your property a reflection of you and what\
    you love.',
  "With stores all over the world, it's\
    easy for you to find furniture for your home or place of business. Locally,\
    we’re in most major cities throughout the country. Find the branch nearest\
    you using our store locator. Any questions? Don't hesitate to contact us\
    today.",
  'Our modern furniture store\
    provide a high level of quality. Our company has invested in advanced\
    technology to ensure that every product is made as perfect and as consistent\
    as possible. With three decades of experience in this industry, we\
    understand what customers want for their home and office.',
];

window.addEventListener('DOMContentLoaded', () => {
  const slideHeadingElement = document.querySelector(
    '.main__section__text__heading',
  );
  const slideTextElement = document.querySelector('.main__section__text__info');
  const menuOpenButton = document.querySelector('.main__nav__menu-icon');
  const menuCloseButton = document.querySelector('.main__nav__close-icon');
  const menuList = document.querySelector('.main__nav__list');
  const menuListItems = document.querySelectorAll('.main__nav__list__item');

  menuListItems.forEach((item) => item.addEventListener('click', closeNavbar));
  menuOpenButton.addEventListener('click', openNavbar);
  menuCloseButton.addEventListener('click', closeNavbar);

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      waitForTransition: true,
    },
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },
    plugins: [SwiperAutoplay, SwiperNavigation],
  });

  swiper.on('scroll', ({ index }) => {
    slideTextElement.style.opacity = 0;
    slideHeadingElement.style.opacity = 0;
    setTimeout(() => {
      slideTextElement.textContent = slideText[index];
      slideHeadingElement.textContent = slideHeading[index];
      slideTextElement.style.opacity = 1;
      slideHeadingElement.style.opacity = 1;
    }, ANIMATION_TIMING);
  });

  function openNavbar() {
    document.body.style.overflowY = 'hidden';
    const navOverflow = document.createElement('div');
    navOverflow.className = 'DELETE_ME';
    navOverflow.style.height = '100vh';
    navOverflow.style.width = '100vw';
    navOverflow.style.position = 'fixed';
    navOverflow.style.top = 0;
    navOverflow.style.left = 0;
    navOverflow.style.opacity = 0;
    navOverflow.style.backgroundColor = 'hsla(0, 0%, 0%, 0.75)';
    navOverflow.style.transition = 'opacity 0.4s ease';
    document.body.appendChild(navOverflow);
    setTimeout(() => {
      navOverflow.style.opacity = 1;
    }, 100);
    isMenuActive = !isMenuActive;
    menuOpenButton.style.opacity = 0;
    setTimeout(() => {
      menuOpenButton.style.display = isMenuActive ? 'none' : 'block';
      menuCloseButton.style.display = isMenuActive ? 'block' : 'none';
      menuOpenButton.style.opacity = 1;
    }, ANIMATION_TIMING);
    menuList.classList.toggle('main__nav__list--active');
  }
  function closeNavbar() {
    if (window.innerWidth > 830) return;
    const navOverflow = document.querySelector('.DELETE_ME');
    navOverflow.style.opacity = 0;
    setTimeout(() => navOverflow.remove(), ANIMATION_TIMING);
    document.body.style.overflowY = 'auto';
    isMenuActive = !isMenuActive;
    menuCloseButton.style.opacity = 0;
    setTimeout(() => {
      menuOpenButton.style.display = isMenuActive ? 'none' : 'block';
      menuCloseButton.style.display = isMenuActive ? 'block' : 'none';
      menuCloseButton.style.opacity = 1;
    }, ANIMATION_TIMING);
    menuList.classList.toggle('main__nav__list--active');
  }
});

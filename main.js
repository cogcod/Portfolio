'use strict';

// 스크롤함수 선언 
function scrollIntoView(selector){
   const scrollTo = document.querySelector(selector); 
   scrollTo.scrollIntoView({behavior:'smooth'}); 
}


// Navbar_ 스크롤시 배경색 넣기 (Make navbar transparent when it is on the top)
const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   // console.log(window.scrollY);
   // console.log(`navbarHeight : ${navbarHeight}`);

   if(window.scrollY > navbarHeight){
      navBar.classList.add('navbar--dark');
   } else {
      navBar.classList.remove('navbar--dark');
   }

});



// Navbar_ menu 클릭시 해당 ID로 이동 (Handle scrolling when tapping on the navbar menu)
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
   // console.log(event.target.dataset.link); 
   const target = event.target;  
   const link = target.dataset.link;  
   
   if(link == null){    
      return;
   }
   
   // console.log(event.target.dataset.link);  
   
   navbarMenu.classList.remove('open');
   scrollIntoView(link);
});



// Navbar toggle button for small screen 
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
   navbarMenu.classList.toggle('open');
});


// Home_ Contactme 버튼 클릭시 이동 (Handle click on "contact me" button on home)
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', ()=>{
   scrollIntoView('#contact');
});



// Home_ 스크롤시 점점 투명하게 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
   // console.log(1 - window.scrollY / homeHeight);
   home.style.opacity = 1 - window.scrollY / homeHeight;
});



// 스크롤시 arrow-up 버튼 나타나게 
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=>{
   if(window.scrollY > homeHeight / 2){
      arrowUp.classList.add('visible');
   }else{
      arrowUp.classList.remove('visible');
   }
});

arrowUp.addEventListener('click', ()=>{
   scrollIntoView('#home');
});



// Portfolio 기능 구현
const btnContainer = document.querySelector('.portfolio__categories');
const portfolioContainer = document.querySelector('.portfolio__container');
const portfolio = document.querySelectorAll('.portfolio__list');

btnContainer.addEventListener('click', (e)=>{
   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   console.log(filter);

   if(filter == null){
      return;
   }

   // Remove selection from the previous item and select the new one
   const active = document.querySelector('.category__btn.selected');
   active.classList.remove('selected');
   
   const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
   target.classList.add('selected');

   portfolioContainer.classList.add('anim-out');   
   setTimeout(()=>{

      portfolio.forEach((item)=>{
         console.log(item.dataset.type);
         if(filter === '*' || filter === item.dataset.type){
            item.classList.remove('invisible');
         }else{
            item.classList.add('invisible');
         }
      });

      portfolioContainer.classList.remove('anim-out');
   },200);
});


// contact_animation 
const contact_txt_left = document.querySelector('.contact__txt__box');
const contact = document.querySelector('#contact');
const contactHeight = contact.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{

   if(window.scrollY>contactHeight){
      contact_txt_left.style.animation="left_appear 3s ease-out";
   }else{
      contact_txt_left.style.animation="left_disappear 1s ease-out";
   }
});


// 메뉴 활성화 

// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다. 
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다. 

const sectionIds = [
   '#home',
   '#about',
   '#skills',
   '#portfolio',
   '#contact'
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => 
   document.querySelector(`[data-link="${id}"]`)
   );
// console.log(sections);
// console.log(navItems);

const observerOptions = {
   root: null,
   rootMargin: '0px',
   threshold: 0.3
}

const observerCallback = (entries, observer)=>{
   entries.forEach(entry => {
      console.log(entry.target);
   });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));



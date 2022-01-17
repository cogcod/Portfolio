'use strict';


// Navbar_ 스크롤시 배경색 넣기 
const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   console.log(window.scrollY);
   console.log(`navbarHeight : ${navbarHeight}`);

   if(window.scrollY > navbarHeight){
      navBar.classList.add('navbar--dark');
   } else {
      navBar.classList.remove('navbar--dark');
   }
});


// Navbar_ menu 클릭시 해당 ID로 이동 
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
   // console.log(event.target.dataset.link); 
   const target = event.target;  
   const link = target.dataset.link;  
   
   if(link == null){    
      return;
   }
   
   console.log(event.target.dataset.link);  

   scrollIntoView(link);
});


// Home_ Contactme 버튼 클릭시 이동 
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', ()=>{
   // document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
   scrollIntoView('#contact');
});

// 중복되는 스크롤함수 선언 
function scrollIntoView(selector){
   const scrollTo = document.querySelector(selector); 
   scrollTo.scrollIntoView({behavior:'smooth'}); 
}
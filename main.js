'use strict';

const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

// navbar_ 스크롤시 배경색 넣기 
document.addEventListener('scroll', ()=>{
   console.log(window.scrollY);
   console.log(`navbarHeight : ${navbarHeight}`);

   if(window.scrollY > navbarHeight){
      navBar.classList.add('navbar--dark');
   } else {
      navBar.classList.remove('navbar--dark');
   }
});


// navbar_ menu 클릭시 해당 ID로 이동 
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
   // console.log(event.target.dataset.link); 
   const target = event.target;  
   const link = target.dataset.link;  
   
   if(link == null){    
      return;
   }
   
   console.log(event.target.dataset.link);  

   const scrollTo = document.querySelector(link); 
   scrollTo.scrollIntoView({behavior:'smooth'}); 
});

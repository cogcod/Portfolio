'use strict';

const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;


// 초기 : 직접 스크롤 위치 지정 + 속성변경 
// document.addEventListener('scroll', ()=>{
//    let value = window.scrollY;
//    console.log(value);

//    if(value>87){
//       navBar.style.backgroundColor="var(--color-pink)";
//    }else{
//       navBar.style.backgroundColor="transparent";
//    }
// });


// 수정 : navbar 높이 구하기 + class로 속성 넣기 
document.addEventListener('scroll', ()=>{
   console.log(window.scrollY);
   console.log(`navbarHeight : ${navbarHeight}`);

   if(window.scrollY > navbarHeight){
      navBar.classList.add('navbar--dark');
   } else {
      navBar.classList.remove('navbar--dark');
   }
});

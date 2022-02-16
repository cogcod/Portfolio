# Poltfolio (Responsive Web)


![포트폴리오](./images/poltfolio/project5.png)

👉 [포트폴리오 보러가기](https://cogcod.github.io/Portfolio/)

<br>

> ## Goals
- HTML과 CSS를 사용한 견고한 마크업 작성 
- CSS 변수 기능을 사용한 전체적인 통일감 부여
- 미디어 쿼리를 이용한 반응형 사이트 구축 
- Vanila JavaScript만을 이용한 동적 로직 구현 

<br>

> ## Skills
- HTML
- CSS(변수)
- Media Query 
- Vanila JavaScript

<br>

> ## Advanced Feature 
- CSS 변수를 이용하여 Color, Font-size, Font-weight에 통일감을 줌
```css
/* Global */
:root{
    /* Color */
    --color-white: #fff;
    --color-white-blur: rgba(255, 255, 255, 0.187);
    --color-light-white: #eee;
    --color-dark-white: #bdbdbd;
    --color-purple: #aa69b7;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-pink: #c28a9c;
    --color-yellow: hsl(50, 100%, 91%);
    --color-orange: #feb546;
    --color-black: #000;

    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* Size */
    --size-border-radius: 4px;

    /* Annimation */
    --animation-duration: 300ms;
}
```

<br>

- 미디어 쿼리 : 네비게이션 바 재배치
![responsive web](./images/responsive.png)

```css
@media screen and (max-width:768px){

    /* Navbar */
    .navbar__toggle-btn{
        display: block;
        top: 22px;
        font-size: 20px;
    }

    #navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
        background-color: var(--color-pink);
    }

    .navbar__menu{
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    .navbar__menu.open{
        display: block;
    }
```

<br>

- Navbar 클릭 시 Scroll 이벤트 구현
```javascript
// 스크롤함수 선언 
function scrollIntoView(selector){
   const scrollTo = document.querySelector(selector); 
   scrollTo.scrollIntoView({behavior:'smooth'}); 
}


// Navbar_ 스크롤시 배경색 넣기
const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   if(window.scrollY > navbarHeight){
      navBar.classList.add('navbar--dark');
   } else {
      navBar.classList.remove('navbar--dark');
   }
});



// Navbar_ menu 클릭시 해당 ID로 이동
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
   const target = event.target;  
   const link = target.dataset.link;  
   
   if(link == null){    
      return;
   } 
   
   navbarMenu.classList.remove('open');
   scrollIntoView(link);
});
```

<br>

## Thank you for reading😊

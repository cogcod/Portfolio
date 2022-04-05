$(function(){

  const $container = $('#slides>.slides-img>.slides-container');
  const $slidesNav = $('#slides>.slides-nav>li>a');
  const $btnPrev = $('#slides>a').eq(0);
  const $btnNext = $('#slides>a').eq(1);
  
  let nowIdx = 0;
  let intervalkey = '';
  
  
  // 함수선언
  function moveFn(){
    //활성화 
    $slidesNav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    
    //이동 
    $container.stop().animate({
      left : -478 * nowIdx
    },400,"easeInOutCubic",function(){
      const $slides = $('#slides>.slides-img>.slides-container>li');
      $slides.first().appendTo($container);
      $container.css({left : 0});
    });
  }


  // 오른쪽방향 인덱스 함수
  function nextIdx(){
    if(nowIdx<5){
      nowIdx++;
    }else{
      nowIdx=0;
    }
  }


  // 자동실행 함수
  function autoPlay(){
    intervalkey = setInterval(function(){
      nextIdx();
      moveFn();
    },3000);
  }


  // 이벤트 구문
  $slidesNav.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $slidesNav.index(this);
    moveFn();
  });


  // 이전버튼
  $btnPrev.on('click',function(evt){
    evt.preventDefault();
    clearInterval(intervalkey);
    
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=5;
    }

    moveFn();
  });


  // 다음버튼
  $btnNext.on('click',function(evt){
    evt.preventDefault();
    clearInterval(intervalkey);
    nextIdx();
    moveFn();
  });


  // 자동실행 
  $(window).on('load',function(){
    clearInterval();
    autoPlay();
  });
  

});
$(function(){

  const $gnb = $('#wrap > header > .container > nav > .gnb');
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');

  $gnb.on('mouseover',function(){
    $bg_lnb.stop().fadeIn(50); //배경판노출 
    $lnb.stop().fadeIn(50); //서브메뉴 노출 
  });

  $gnb.on('mouseout',function(){
    $bg_lnb.stop().fadeOut(50); 
    $lnb.stop().fadeOut(50); 
  });

  //커서가 도넛쪽으로 가도 사라지지 않도록 
  $bg_lnb.on('mouseover',function(){
    $gnb.trigger('mouseover'); //gnb의 mouseover이벤트 강제발생
  });

  $bg_lnb.on('mouseout',function(){
    $gnb.trigger('mouseout'); //gnb의 mouseout이벤트 강제발생
  });

});
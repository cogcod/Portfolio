// 슬라이드 이동
$(function(){

    const $slidesContainer = $('.slides__img');
    const $pagination = $('.slides__pagination>li>a');

    let nowIdx = 0;
    let intervalkey = '';


    //슬라이드 이동 함수 
    function moveFn(){
        $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slidesContainer.stop().animate({
            left: -(100 * nowIdx)+"%"
        },400);
    }
    
    // pagination 클릭 이벤트 
    $pagination.on('click',function(evt){
        clearInterval(intervalkey);
        evt.preventDefault();
        nowIdx = $pagination.index(this);
        moveFn();
    });
    
    
    //인덱스 함수 
    function nextIdx(){
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    }

    // 자동실행 함수 
    function autoPlay(){
        intervalkey= setInterval(function(){
            nextIdx();
            moveFn();
        },3000);
    }

    // 로딩 이벤트 
    $(window).on('load',function(){
        clearInterval();
        autoPlay();
    });
});
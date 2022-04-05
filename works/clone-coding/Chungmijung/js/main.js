// --- main slides ---
$(function(){

    const $slidesContainer = $('.slides__img');
    const $pagination = $('.slides__pagination>li>a');

    let nowIdx = 0;
    let intervalkey = '';

    // $slidesContainer.first().append($slidesContainer.clone().addClass('clone'));
    // $slidesContainer.last().prepend($slidesContainer.clone().addClass('clone'));


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


// --- contents slides ---
$(function(){

    const $contentsSlides = $('.slides__product');
    const $pagination = $('.contents__pagination>li');

    let nowIdx = 0;
    let intervalkey = '';

    function moveFn(){
        $pagination.eq(nowIdx).addClass('on').siblings().removeClass('on');
        $contentsSlides.stop().animate({
            left: -490 * nowIdx
        },400);
    }

    $pagination.on('click',function(evt){
        evt.preventDefault();
        nowIdx = $pagination.index(this);
        moveFn();
    });

    function nextIdx(){
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    };

    function autoPlay(){
        intervalkey = setInterval(function(){
            nextIdx();
            moveFn();
        },3000);
    }

    $(window).on('load',function(){
        clearInterval();
        autoPlay();
    });
});


// --- news slides ---
$(function(){

    const $btnPlay = $('.btn_play');
    const $btnPause = $('.btn_pause');
    const $newsTxt = $('.news__txt>li');
    const $slides = $('.slides__news__img>img');

    let intervalkey = '';

    // 자동실행
    function autoPlay(){
        intervalkey = setInterval(function(){
            $slides.fadeToggle(1000);
            $newsTxt.fadeToggle(1000);
        },3000);
    }

    // 정지
    function autoPause(){
        clearInterval(intervalkey);
    }

    // 활성화 - play
    $btnPlay.on('click',function(evt){
        evt.preventDefault();
        autoPlay();
    });

    // 활성화 - pause
    $btnPause.on('click',function(evt){
        evt.preventDefault();
        autoPause();
    });

    // 활성화 - 자동실행 
    $(window).on('load',function(){
        autoPlay();
    });

});
$(function(){
    
    const $container = $('.slides-wrap > .slides-images');
    const $btnPrev = $('.slides-wrap > .btn_prev');
    const $btnNext = $('.slides-wrap > .btn_next');

    const $gnb = $('header > .top_gnb > nav > .gnb');
    const $lnb = $('header > .top_gnb > nav > .gnb > li > .lnb');
    const $bg_lnb = $('header > .bg_lnb');

    let nowIdx = 0;
    let intervalID = '';


    // 인덱스 함수
    function nextIdx(){
        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    }
    
    // 다음버튼 
    $btnNext.on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalID);
        nextIdx();

        $container.stop().animate({marginLeft:-2830-1120-15},400,"easeInOutCubic",function(){
            const $slides = $('.slides-wrap > .slides-images > li');
            $slides.first().appendTo($container);
            $container.css({marginLeft:-2830});
        });
    });

    // 이전버튼 
    $btnPrev.on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalID);

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=4;
        }

        $container.stop().animate({marginLeft:-2830+1120+15},400,"easeInOutCubic",function(){
            const $slides = $('.slides-wrap > .slides-images > li');
            $slides.last().prependTo($container);
            $container.css({marginLeft:-2830});
        });     

    });

    // 자동실행 
    $(window).on('load',function(){
        
        intervalID = setInterval(function(){
            $container.stop().animate({marginLeft:-2830-1120-15},400,"easeInOutCubic",function(){
                const $slides = $('.slides-wrap > .slides-images > li');
                $slides.first().appendTo($container);
                $container.css({marginLeft:-2830});
            });
        },3000);
        
    });


    // ------- 서브메뉴, 배경판 노출하기 -------
    $gnb.on('mouseover',function(){
        $bg_lnb.stop().fadeIn(50);
        $lnb.stop().fadeIn(50);
    });

    $gnb.on('mouseout', function(){
        $bg_lnb.stop().fadeOut(50);
        $lnb.stop().fadeOut(50);
    });

    $bg_lnb.on('mouseover',function(){
        $gnb.trigger('mouseover');
    });

    $bg_lnb.on('mouseout',function(){
        $gnb.trigger('mouseout');
    });

});
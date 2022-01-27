$(function(){

    const $indicator = $('.slides>.slides-pagination>li>a');
    const $container = $('.slides>.slides-container');
    const $btnNext = $('.next');
    const $btnPrev = $('.prev');
    let nowIdx = 0;

    //활성화,컨테이너이동 함수 선언!!
    function moveFn(){
        
        //활성화표시 on 
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        //컨테이너 이동 
        $container.stop().animate({left:-1180 * nowIdx},400,"easeInOutCubic",function(){console.log("슬라이드 이동 완료"); });

    }


    $indicator.on('click',function(evt){

        nowIdx = $indicator.index(this);

        moveFn();
        evt.preventDefault();

    });


    //indicator를 눌렀을 때는 해당 a에 클래스를 옮겨주면 되고,
    //이전,다음 버튼은 indicator식을 이용해 index를 증감시켜주면 된다. 

    $btnNext.on('click',function(evt){

        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        moveFn();
        evt.preventDefault();

    });

    $btnPrev.on('click',function(evt){

        if(nowIdx>=1){  //1보다 같거나 크면 = 1~4 
            nowIdx--;
        }else{          //0은 4 
            nowIdx=4;
        }

        moveFn();
        evt.preventDefault();
    });


    //슬라이드 자동실행 = 시간간격 설정 
    interverID = setInterval(function(){

        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        moveFn();
    },2000); //2초간격으로 슬라이드 이동 

});
$(function(){

    const $indicator = $('.slides>.slides-pagination>li>a');
    const $container = $('.slides>.slides-container');
    const $btnNext = $('.next');
    const $btnPrev = $('.prev');
    let nowIdx = 0;


    //활성화표시가 중복사용되니까 함수로 만들기 
    function moveFn(){
        //활성화표시
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        //컨테이너 이동
        $container.stop().animate({
            left : -1180 * nowIdx
        },400,"easeInOutCubic",function(){
            console.log("슬라이드 이동 완료~!");
        });
    }


    $indicator.on('click', function(evt){

        //이번에 클릭한 a의 인덱스번호 추출
        nowIdx = $indicator.index(this);

        // //활성화표시
        // $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        // //컨테이너 이동
        // $container.stop().animate({
        //     left : -1180 * nowIdx
        // },400,"easeInOutCubic",function(){
        //     console.log("슬라이드 이동 완료~!");
        // });

        moveFn();


        evt.preventDefault();
    });

    $btnNext.on('click',function(evt){

        //보여줄 슬라이드에 대한 인덱스번호 추출 
        

        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        // //활성화표시
        // $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        // //컨테이너 이동 
        // $container.stop().animate({
        //     left : -1180 * nowIdx
        //  },400,"easeInOutCubic",function(){
        //     console.log("슬라이드 이동 완료~!");
        //   });
        // });

        moveFn();
        evt.preventDefault();
        
    });

    $btnPrev.on('click',function(evt){
        if(nowIdx >0 ){
            nowIdx--;
        }else{
            nowIdx=4;
        }
        
         // $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        // $container.stop().animate({
        //     left : -1180 * nowIdx
        // },400,"easeInOutCubic",function(){
        //     console.log("슬라이드 이동 완료~!");
        // });

        moveFn();
        evt.preventDefault();

    });

        //슬라이드 자동 실행 
        let intervarID = "";
        intervarID = setInterval(function(){

        //next버튼 로직 가져오기 : 자동으로 넥스트 버튼을 클릭하는 것이기 때문에 그대로 가져오면 된다. 
        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        // //활성화표시
        // $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        // //컨테이너 이동 
        // $container.stop().animate({
        //     left : -1180 * nowIdx
        //  },400,"easeInOutCubic",function(){
        //     console.log("슬라이드 이동 완료~!");
        //   });

        moveFn();
    },2000);
});
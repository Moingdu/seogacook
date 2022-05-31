$(function(){
    //메뉴
    var sw=0;
    $('#nav-icon4').click(function(){
		if(sw==0){
            sw=1;
            $(this).addClass('open');
            $('.gnb').stop().animate({
                right:0
            });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.gnb').stop().animate({
                right:'-100%'
            })
        }
	});
    //메뉴 안 아코디언
    $('.main > a').click(function(){
        //만약 클릭한 메뉴의 클래스 속성에 active가 설정되어있지 않다면
        if($(this).attr('class') != 'active'){
            $('.main > a').removeClass('active');
            $(this).addClass('active');
            $('.sub').slideUp();
            $(this).next().slideDown();
            
        //클릭한 메뉴의 클래스 속성에 active가 성정되어있다면
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();

        }
    })
    //fullpage
    $('#fullpage').fullpage({
        navigation:true,
        navigationPosition:'right',
        afterLoad:function(anchorLink, index){
            if(index==2){
                //함수 호출
                addNum();
            }
            if(index==4){
                //함수 호출
                addNum_s();
            }
        },
    })
    //메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:4000
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
    });
    //sec1 숫자 증가
    function addNum(){
        //$(this) : $('.bright span')을 가리킴
        //prop() : 객체에 속성(property)을 추가하거나, 객체의 속성을 알아내는 메서드, 초기값은 0,최종값은 16
        $('.b_right span').each(function(){
            $(this).prop('Counter',0).animate({
                Counter:16
            },{
                duration:500,
                //now값이 변하는 단계, 실수로 증가함
                step:function(now){
                    //numberfn함수를 호출하면서 정수값now를 매개변수로 전달, 함수의 결과값을 num변수에 받아서 저장
                    //Math.ceil():실수를 정수로 변환(올림)
                    var num=numberfn(Math.ceil(now));
                    $(this).text(num);
                }
            })
        })
    }
    //numberfn 함수
    //매개변수 x에서 Math.ceil(now)값을 전달받음
    function numberfn(x) {
        //toString()메서드 : 전달받은x값을 문자열로 변환
        //replace()메서든 : 문자열로 바꿔주는 메서드 (치환)
        // \B : 문자가 존재하는지 경계가 아닌 부분 찾기
        // \d{3} : 문자열 3글자
        // (?!\d): 3글자 이상 초과안됨
        // g : 문자열 전체 검색
        // ?= : 기호 앞과 뒤의 조건을 합쳐줌
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    //sec4 숫자 증가
    function addNum_s(){
        $('.sec4 .box span').each(function(){
            $(this).prop('Counter_s',0).animate({
                Counter_s:215000000
            },{
                duration:500,
                step:function(now_s){
                    var num_s=numberfn(Math.ceil(now_s));
                    $(this).text(num_s);
                }
            })
        })
    }
    function numberfn(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});
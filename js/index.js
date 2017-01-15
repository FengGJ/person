$(function () {
    // 导航
    var flag=true;

    var height=$(window).height();
    $(".header").height(height);

    if($(window).scrollTop()>32){
        flag=false;

        $(".title").addClass("fixed");

    }else{
        $(".title").removeClass("fixed");

    }
    if(parseInt($(window).width())<991){
        flag=false;
        scrollTop();
    }else{
        scrollTop();
        flag=true;
    }
    scrollTop();

    function scrollTop(){
        if(flag){
            if($(window).scrollTop()==0){
                $(".header").height(height);


                windowWheel();
                // $(".header .navigation-right nav li").removeClass("active").eq(0).addClass("active");

            }else{
                $(window).unbind("mousewheel DOMMouseScroll")


            }

        }else{


        }
    }

    if( parseInt($(window).width())<="992"){
        $("#experience .e-con li").removeClass("left")
    }else{
        for(var i = 0 ; i < $("#experience .e-con li").length; i++){
            if(i%2==0){
                $("#experience .e-con li").eq(i).addClass("left")
            }
        }
    }

    $(window).resize(function(){

        if( parseInt($(window).width())<="992"){
            $("#experience .e-con li").removeClass("left")
        }else{
            for(var i = 0 ; i < $("#experience .e-con li").length; i++){
                if(i%2==0){
                    $("#experience .e-con li").eq(i).addClass("left")
                }
            }
        }

        $(".top_nav").css({"padding-left":parseInt($(".container").css("margin-left"))+15+"px","padding-right":parseInt($(".container").css("margin-left"))+15+"px"})

    })

    $(".top_nav").css({"padding-left":parseInt($(".container").css("margin-left"))+15+"px","padding-right":parseInt($(".container").css("margin-left"))+15+"px"})


    $(window).scroll(function () {
        scrollTop()
        if($(window).scrollTop()>32){
            $(".title").addClass("fixed");

        }else{
            $(".title").removeClass("fixed");

        }

        $(".wheel").each(function(i){
            if($(window).scrollTop()>$(".wheel").eq(i).offset().top-50){
                $(".header .navigation-right nav li").removeClass("active").eq(i).addClass("active");
            }

        })
    })

    windowWheel();
    function windowWheel(){
        $(window).on("mousewheel DOMMouseScroll", function (e) {

            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox


            if (delta > 0) {
                // 向上滚

            } else if (delta < 0) {

                // 向下滚

                if(flag){
                    wheelTop()
                }

            }
        });
    }

    function wheelTop(){
        var top= $(window).scrollTop();
        if(top>32){
            return;
        }
        var newObj={st:top};
            $(newObj).animate({st:height},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st)
            }
        })

    }
    $(".bottom_header").click(function () {
        wheelTop()
    })

    // 导航点击

    $(".navigation-right nav li").click(function () {
        $(".navigation-right nav li").removeClass("active")
        $(this).addClass("active");

        list_click(this);
    })
    $(".menu-nav nav li").click(function () {
        $(".menu-nav nav li").removeClass("active")
        $(this).addClass("active");
        $(window).unbind("scroll")
        list_click(this);
    })

    touch.on(".wrapper","drag",function(e){
        $(window).scroll(function(){
            for(var i = 0 ; i < $(".wrapper>div").length; i++){
                if($(".wrapper>div")[i].offsetTop-10<=$(window).scrollTop()){
                    $(".navigation-right nav li").removeClass("active")
                    $(".navigation-right nav li").eq(i).addClass("active");
                    $(".menu-nav  nav li").removeClass("active")
                    $(".menu-nav  nav li").eq(i).addClass("active")
                }
            }

        })
    })

    function list_click (obj){
        var href = $(obj).find("a").attr("href");
        var pos = $(href).offset().top;
        var top= $(window).scrollTop();

        if(top==0){
            var newObj={st:33};
            if(href=="#home"){
                return false;
            }
        }else{
            var newObj={st:top};
        }
        $(newObj).animate({st:pos},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st)
                $("body,html").removeAttr("style");
            }
        })
    }
    //导航效果
    $(window).scroll(function(){
        for(var i = 0 ; i < $(".wrapper>div").length; i++){
            if($(".wrapper>div")[i].offsetTop-50<=$(window).scrollTop()){
                $(".navigation-right nav li").removeClass("active")
                $(".navigation-right nav li").eq(i).addClass("active");
                $(".menu-nav  nav li").removeClass("active")
                $(".menu-nav  nav li").eq(i).addClass("active")
            }
        }

    })
    //作品

})
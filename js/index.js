$(function () {
    // 导航
    var height=$(window).height();
    $(".header").height(height);

    if($(window).scrollTop()>32){
        $(".top_nav").addClass("fixed");

    }else{
        $(".top_nav").removeClass("fixed");

    }
    scrollTop();
    function scrollTop(){
        if($(window).scrollTop()==0){
            $(".header").height(height);
            $("html").css("overflow","hidden");
            $("body").css("overflowY","scroll")
            windowWheel();
            // $(".header .navigation-right nav li").removeClass("active").eq(0).addClass("active");

        }else{
            $(window).unbind("mousewheel DOMMouseScroll")
        }
    }

    $(window).scroll(function () {
        scrollTop()
        if($(window).scrollTop()>32){
            $(".top_nav").addClass("fixed");

        }else{
            $(".top_nav").removeClass("fixed");

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
                wheelTop()

            }
        });
    }

    function wheelTop(){
        var top= $(window).scrollTop();
        var newObj={st:top};
        $(newObj).animate({st:height},{
            duration:500,
            step:function(){
                $(window).scrollTop(newObj.st)
            }
        })
        $("html").css("overflowY","scroll");
        $("body").css("overflowY","hidden")

    }
    $(".bottom_header").click(function () {
        wheelTop()
    })

    // 导航点击
    $(".header .navigation-right nav li").click(function () {
        $(".header .navigation-right nav li").removeClass("active")
        $(this).addClass("active");

        var href = $(this).find("a").attr("href");
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
    })

})
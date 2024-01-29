$(function(){
    //popup-p1
    $(".popup-Btna").click(function(){
        $(".popupbg1").show();
        $(".popupwrap").show();
        // $("body").css("overflow", "hidden");
        $(".popupwrap").animate({scrollTop:0});
    });
    $(".popup-closed1 ").click(function(){
        $(".popupbg1").hide();
        $('.popupwrap').hide();
        // $("body").css("overflow", "scroll");



    });

    //팝업 외부영억 클릭시 팝업 닫기
    $(document).mouseup(function (e){
        if($(".popupbg1").has(e.target).length === 0){
            $(".popupbg1").hide();
        }
    });

    // esc 팝업 닫기
    $(document).keydown(function(e){
        //keyCode 구 브라우저, which 현재 브라우저
        var code = e.keyCode || e.which;
     
        if (code == 27) { // 27은 ESC 키번호
            $('.popupbg1').hide();
        }
    });

    //popup-p2
    $(".popup-Btnb").click(function(){
        $(".popupbg2").show();
        $(".popupwrap").show();
        // $("body").css("overflow", "hidden");
        $(".popupwrap").animate({scrollTop:0});
    });
    $(".popup-closed2 ").click(function(){
        $(".popupbg2").hide();
        $('.popupwrap').hide();
        // $("body").css("overflow", "scroll");



    });

    //팝업 외부영억 클릭시 팝업 닫기
    $(document).mouseup(function (e){
        if($(".popupbg2").has(e.target).length === 0){
            $(".popupbg2").hide();
        }
    });

    // esc 팝업 닫기
    $(document).keydown(function(e){
        //keyCode 구 브라우저, which 현재 브라우저
        var code = e.keyCode || e.which;
     
        if (code == 27) { // 27은 ESC 키번호
            $('.popupbg2').hide();
        }
    });

        //popup-p3
        $(".popup-Btnc").click(function(){
            $(".popupbg3").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed3 ").click(function(){
            $(".popupbg3").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg3").has(e.target).length === 0){
                $(".popupbg3").hide();
            }
        });
    
        // esc 팝업 닫기
        $(document).keydown(function(e){
            //keyCode 구 브라우저, which 현재 브라우저
            var code = e.keyCode || e.which;
         
            if (code == 27) { // 27은 ESC 키번호
                $('.popupbg3').hide();
            }
        });

        //popup-p4
        $(".popup-Btnd").click(function(){
            $(".popupbg4").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed4").click(function(){
            $(".popupbg4").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg4").has(e.target).length === 0){
                $(".popupbg4").hide();
            }
        });
    
        // esc 팝업 닫기
        $(document).keydown(function(e){
            //keyCode 구 브라우저, which 현재 브라우저
            var code = e.keyCode || e.which;
         
            if (code == 27) { // 27은 ESC 키번호
                $('.popupbg4').hide();
            }
        });

        //popup-p5
        $(".popup-Btne").click(function(){
            $(".popupbg5").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed5").click(function(){
            $(".popupbg5").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg5").has(e.target).length === 0){
                $(".popupbg5").hide();
            }
        });
    
        // esc 팝업 닫기
        $(document).keydown(function(e){
            //keyCode 구 브라우저, which 현재 브라우저
            var code = e.keyCode || e.which;
         
            if (code == 27) { // 27은 ESC 키번호
                $('.popupbg5').hide();
            }
        });
    
        //popup-p6
        $(".popup-Btnf").click(function(){
            $(".popupbg6").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed6").click(function(){
            $(".popupbg6").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg6").has(e.target).length === 0){
                $(".popupbg6").hide();
            }
        });
        
            // esc 팝업 닫기
            $(document).keydown(function(e){
                //keyCode 구 브라우저, which 현재 브라우저
                var code = e.keyCode || e.which;
             
                if (code == 27) { // 27은 ESC 키번호
                    $('.popupbg6').hide();
                }
            });


        //popup-p7
        $(".popup-Btng").click(function(){
            $(".popupbg7").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed7").click(function(){
            $(".popupbg7").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg7").has(e.target).length === 0){
                $(".popupbg7").hide();
            }
        });
        
            // esc 팝업 닫기
            $(document).keydown(function(e){
                //keyCode 구 브라우저, which 현재 브라우저
                var code = e.keyCode || e.which;
             
                if (code == 27) { // 27은 ESC 키번호
                    $('.popupbg7').hide();
                }
            });

        //popup-p8
        $(".popup-Btnh").click(function(){
            $(".popupbg8").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed8").click(function(){
            $(".popupbg8").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg8").has(e.target).length === 0){
                $(".popupbg8").hide();
            }
        });
        
            // esc 팝업 닫기
            $(document).keydown(function(e){
                //keyCode 구 브라우저, which 현재 브라우저
                var code = e.keyCode || e.which;
             
                if (code == 27) { // 27은 ESC 키번호
                    $('.popupbg8').hide();
                }
            });

         //popup-p9
        $(".popup-Btni").click(function(){
            $(".popupbg9").show();
            $(".popupwrap").show();
            // $("body").css("overflow", "hidden");
            $(".popupwrap").animate({scrollTop:0});
        });
        $(".popup-closed9").click(function(){
            $(".popupbg9").hide();
            $('.popupwrap').hide();
            // $("body").css("overflow", "scroll");
    
    
    
        });
    
        //팝업 외부영억 클릭시 팝업 닫기
        $(document).mouseup(function (e){
            if($(".popupbg9").has(e.target).length === 0){
                $(".popupbg9").hide();
            }
        });
        
            // esc 팝업 닫기
            $(document).keydown(function(e){
                //keyCode 구 브라우저, which 현재 브라우저
                var code = e.keyCode || e.which;
             
                if (code == 27) { // 27은 ESC 키번호
                    $('.popupbg9').hide();
                }
            });

   
        
    
    


}); 














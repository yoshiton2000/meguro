
$(function(){
   
    $(".toggle_btn").on("click",function(){
        if($("#header").hasClass("open")){
            $("#header").removeClass("open"); 
        }else{
            $("#header").addClass("open");
            return false;
        };
    
    });
});

$(function(){
   
    $(".toggle_btn").on("click",function(){
        if($(".header_bar").hasClass("open")){
            $(".header_bar").removeClass("open"); 
        }else{
            $(".header_bar").addClass("open");
            return false;
        };
    
    });
});






$("#meinvisual").slick({
    autoplay: true, // 自動再生
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear',// アニメーション
    arrows: false,
    autoplaySpeed: 5000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    speed: 600, // フェードアニメーションの速度設定
});



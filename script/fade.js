$(function(){
    start();
    var imgs = 2;
    var now = 0;
    function start(){
        $('.c_inner h1 span').eq(0).siblings().fadeOut();
        setInterval(function(){slide();},1000);
    };
    function slide(){
        now=now==imgs?0:now+=1;
        $('.c_inner h1 span').eq(now-1).fadeOut();
        $('.c_inner h1 span').eq(now).fadeIn();
    };
});
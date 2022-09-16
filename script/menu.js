$(function(){
    $('.nav> li').mouseenter(function(){
        $('.sub').stop().slideDown();
    });
    $('.nav> li').mouseleave(function(){
        $('.sub').stop().slideUp();
    });
});
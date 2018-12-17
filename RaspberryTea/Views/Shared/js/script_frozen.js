$(function(){
    
   $('#leadformTop').submit(function(){
       
       yaCounter40478110.reachGoal('order-B');
       
   }) 
   $('#leadform').submit(function(){
       
       yaCounter40478110.reachGoal('order-B');
       
   }) 
    
/*document.ondragstart = xenforo;
document.onselectstart = xenforo;
document.oncontextmenu = xenforo;
function xenforo() {return false}  
    */
    
$('#timer').click(function(){
    
    location.href="index.html#frozen";
    
    
})
   
    
    

    
$('head').append('<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" >'+'<link rel="stylesheet" href="js/owl/owl.carousel.css" >'+'<link rel="stylesheet" href="js/fancybox/source/jquery.fancybox.css" >');$('.carousel').on('slid.bs.carousel',function(){$('.item.active',this).each(function(){if($(this).attr('pokaz')){$('.left.carousel-control').hide();}else{$('.left.carousel-control').show();}})})
$('.btn-zvonok').click(function(){location.href="#frozen";})
$('.btn-green').click(function(){location.href="#frozen";})
$('.made__slider').owlCarousel({loop:true,nav:true,margin:10,nav:true,navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1,nav:true},600:{items:1,nav:true},1000:{items:1,nav:true,}}});$('.photo-slider__best-photo').owlCarousel({loop:true,nav:true,margin:10,nav:true,navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1,nav:true},600:{items:1,nav:true},1000:{items:1,nav:true,}}});$('.photo-slider__video').owlCarousel({loop:true,nav:true,margin:40,nav:true,navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1,nav:true},600:{items:2,nav:true},1000:{items:3,nav:true,}}});$('#slider-mesta').carousel({})
$('.photo-slider__best-photo a').fancybox();$('.photoEmotion a').fancybox();$('.lifeImg a').fancybox();$('.photo-slider__emotion').owlCarousel({loop:true,nav:true,dots:true,margin:20,navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1,nav:true},366:{items:1,nav:true,margin:0},600:{items:3,nav:true},1000:{items:4,nav:true,}}});
$('.photo-slider1').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    items:4,
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{0:{items:1,nav:true},366:{items:1,nav:true},600:{items:2,nav:true},1000:{items:4,nav:true,},1600:{items:4,nav:true,}}});
$(function(){
$('.wrp').click(function(){$('.open-video,.wrp').hide();$('.input-video').html('');})
$('.open-video .close').click(function(){$('.open-video,.wrp').hide();$('.input-video').html('');})   
$('.photo-slider__video .y1').click(function(){$('.open-video,.wrp').show();$(".input-video").html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QeXZlstwDag?ecver=1&autoplay=1" allowfullscreen></iframe>');})
$('.photo-slider__video .y2').click(function(){$('.open-video,.wrp').show();$(".input-video").html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WQTtCBM1cTU?ecver=1&autoplay=1" allowfullscreen></iframe>');})
$('.photo-slider__video .y3').click(function(){$('.open-video,.wrp').show();$(" .input-video").html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HSS9l91tCIk?ecver=1&autoplay=1" allowfullscreen></iframe>');})
$('.photo-slider__video .y4').click(function(){$('.open-video,.wrp').show();$(".input-video").html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/g8WP_DMfp_s?ecver=1&autoplay=1" allowfullscreen></iframe>');})})})



function two(a) {
    return (9 < a ? "" : "0") + a
}
function formatTime(a) {
    a = Math.floor(a / 1E3);
    var b = Math.floor(a / 60),
        c = Math.floor(b / 60),
        d = c / 24 | 0,
    c = c % 24;
    a %= 60;
    b %= 60;
    return "<span>"+d + "</span> " + days(d) + " " + two(c) + " " + hours(c) + " " + two(b) + " " + minutes(b) + " " + two(a) + " " + seconds(a)
};
// функция для склонения слов ( (1)"день", (2)"дня", (5)"дней")
 
function plural(str1,str2,str5){
  return function ( n ) {return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))}
  }

var days =  plural('день', 'дня', 'дней'),
    hours = plural('час', 'часа', 'часов'),
    minutes = plural('минута', 'минуты', 'минут'),
    seconds = plural('секунда', 'секунды', 'секунд');
 
function Time() {
    var data = Date.parse('08/18/2017') // дата начала 1 шестидневки  строго "месяц/день/год"
    data = new Date(data);
    data.setMinutes((-180 - data.getTimezoneOffset()), 0, 0); //для коррекции   запустить в зоне акции alert((new Date).getTimezoneOffset()) и поменять число
    for (; (new Date).getTime() > data; )  {
    data.setDate(data.getDate()+7)//через сутки +1 , через 7 дней +7
    }
    var a = data.getTime() -  (new Date).getTime();
    $('.dateOf').text(data.toLocaleString());
    document.getElementById("timer").innerHTML = formatTime(a);
  window.setTimeout(Time, 1E3)
};
Time();


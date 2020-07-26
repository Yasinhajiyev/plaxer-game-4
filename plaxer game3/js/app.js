$(window).scroll(function(){
  if($(window).scrollTop()>50){
    $(".header").addClass("colorzilla")

  }
  else{
    $(".header").removeClass("colorzilla")
  }
})

$(".menu-line").mouseover(function(){
  $(".menu-line2").css({"transform":"translateX(0px)"})
})

$(".menu-line").mouseleave(function(){
  $(".menu-line2").css({"transform":"translateX(2px)"})
})

$(".menu-line").click(function(){
  $(".right").css({"transform":"translateX(1020px)"})
})

$(".close-icon").click(function(){
  $(".right").css({"transform":"translateX(1300px)"})
})

$(".menu-line").click(function(){
  $(".right-small").css({"transform":"translateX(235px)"})
})

$(".close-icon").click(function(){
  $(".right-small").css({"transform":"translateX(1300px)"})
})



$(".open-menu1").click(
  function(){
    $(".opened-menu1").stop().slideToggle()

  }
)

$(".open-menu2").click(
  function(){
    $(".opened-menu2").stop().slideToggle()

  }
)

$(".open-menu3").click(
  function(){
    $(".opened-menu3").stop().slideToggle()

  }
)

$(".open-menu4").click(
  function(){
    $(".opened-menu4").stop().slideToggle()

  }
)

$(".open-menu5").click(
  function(){
    $(".opened-menu5").stop().slideToggle()

  }
)





$('.back-slider').slick({
   
  infinite: true,
  speed: 500,
  slidesToShow: 1,
 
});





$(".Drop-menu").mouseover(function(){

  $(".Dropped-menu").css({"display":"block"}) 
})
$(".Drop-menu").mouseleave(function(){

  $(".Dropped-menu").css({"display":"none"}) 
})


$(".elements").mouseover(function(){
  $(".elemented-menu").css({"display":"block"})
})

$(".element-menu").mouseleave(function(){
  $(".elemented-menu").css({"display":"none"})
})


$(".Blog-menu").mouseover(function(){

  $(".Blogged-menu").css({"display":"block"}) 
})
$(".Blog-menu").mouseleave(function(){

  $(".Blogged-menu").css({"display":"none"}) 
})

$(".gallery-menu").mouseover(function(){

  $(".galleried-menu").css({"display":"block"}) 
  
})
$(".gallery-menu").mouseleave(function(){

  $(".galleried-menu").css({"display":"none"}) 

})
$(".grid2").mouseover(function(){
  $(".gridded2-menu").css({"display":"block"})
})
$(".grid2").mouseleave(function(){
  $(".gridded2-menu").css({"display":"none"})
})


$(".grid2").mouseover(function(){
  $(".grid2-line").css({"display":"block"})
})
$(".grid2").mouseleave(function(){
  $(".grid2-line").css({"display":"none"})
})

$(".packery").mouseover(function(){
  $(".packery-line").css({"display":"block"})
})
$(".packery").mouseleave(function(){
  $(".packery-line").css({"display":"none"})
})



$(".grid").mouseover(function(){
  $(".grid-line").css({"display":"block"})
})
$(".grid").mouseleave(function(){
  $(".grid-line").css({"display":"none"})
})

$(".sidebar").mouseover(function(){
  $(".sidebar-line").css({"display":"block"})
})
$(".sidebar").mouseleave(function(){
  $(".sidebar-line").css({"display":"none"})
})

$(".masonry").mouseover(function(){
  $(".masonry-line").css({"display":"block"})
})
$(".masonry").mouseleave(function(){
  $(".masonry-line").css({"display":"none"})
})



$(".stream").mouseover(function(){
  $(".stream-line").css({"display":"block"})
})
$(".stream").mouseleave(function(){
  $(".stream-line").css({"display":"none"})
})

$(".esport").mouseover(function(){
  $(".esport-line").css({"display":"block"})
})
$(".esport").mouseleave(function(){
  $(".esport-line").css({"display":"none"})
})
$(".portfolio").mouseover(function(){
  $(".portfolio-line").css({"display":"block"})
})
$(".portfolio").mouseleave(function(){
  $(".portfolio-line").css({"display":"none"})
})
$(".categories").mouseover(function(){
  $(".categories-line").css({"display":"block"})
})
$(".categories").mouseleave(function(){
  $(".categories-line").css({"display":"none"})
})

$(".developers").mouseover(function(){
  $(".developers-line").css({"display":"block"})
})
$(".developers").mouseleave(function(){
  $(".developers-line").css({"display":"none"})
})

$(".merch").mouseover(function(){
  $(".merch-line").css({"display":"block"})
})
$(".merch").mouseleave(function(){
  $(".merch-line").css({"display":"none"})
})


$(".read-button").mouseover(function(){
  $(".readbutton-line").css({"display":"block"})
})

$(".read-button").mouseleave(function(){
  $(".readbutton-line").css({"display":"none"})
})


$('.wcgleague').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});


$('.wcgleague-small').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
 
});

$(".all-span2").mouseover(function(){
  $(".alltwo").addClass("all-active")
})

$(".all-span2").mouseleave(function(){
  $(".alltwo").removeClass("all-active")
})

$(".all-span3").mouseover(function(){
  $(".allthree").addClass("all-active3")
})


$(".num").counterUp({delay:10,time:1000})






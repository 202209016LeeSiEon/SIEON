  /*메뉴 슬라이드*/
  $(".p1_header_menu>li").click(function(){
	$("#phone_etc").animate({"margin-right":"0px"},350,"swing");
	$("#header_etc>span").css({"display":"none"});
});

$("#header_etc_close>span").click(function(){
	$("#phone_etc").animate({"margin-right":"-100%"}, 350, "swing");
	$("#header_etc>span").css({"display":"block"});
});




$(".contents_01_L2>li:nth-child(2)>img").click(function(){
	$(".contents_01_L2>li:nth-child(1)>img").css({"opacity":"0.3"});
	$(".contents_01_L2>li:nth-child(2)>img").css({"opacity":"1"});
	$(".contents_01_L2>li:nth-child(3)>img").css({"opacity":"0.3"});
	$(".contents_01_L1").css({"background-image":"url(./img/penta02.jpg)"});
 });



 $(".contents_01_L2>li:nth-child(3)>img").click(function(){
	$(".contents_01_L2>li:nth-child(1)>img").css({"opacity":"0.3"});
	$(".contents_01_L2>li:nth-child(2)>img").css({"opacity":"0.3"});
	$(".contents_01_L2>li:nth-child(3)>img").css({"opacity":"1"});
	$(".contents_01_L1").css({"background-image":"url(./img/penta03.jpg)"});
 });

 $(".contents_01_L2>li:nth-child(1)>img").click(function(){
	$(".contents_01_L2>li:nth-child(1)>img").css({"opacity":"3"});
	$(".contents_01_L2>li:nth-child(2)>img").css({"opacity":"0.3"});
	$(".contents_01_L2>li:nth-child(3)>img").css({"opacity":"0.3"});
	$(".contents_01_L1").css({"background-image":"url(./img/penta01.jpg)"});
 });


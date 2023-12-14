  /*메뉴 슬라이드*/
  $(".p1_header_menu>li").click(function(){
	$("#phone_etc").animate({"margin-right":"0px"},350,"swing");
	$("#header_etc>span").css({"display":"none"});
});

$("#header_etc_close>span").click(function(){
	$("#phone_etc").animate({"margin-right":"-100%"}, 350, "swing");
	$("#header_etc>span").css({"display":"block"});
});

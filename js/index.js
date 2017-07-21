window.onload=function(){
	$(".Tab").hover(function(){
				$(this).find(".Tab-bol").show().parent().siblings().find(".Tab-bol").hide();
			})
	 
	$(".cont2-le-wrap").hover(function(){
				$(this).find(".Tab-bol").hide();
		})
	 
	
	$(".cont5-top ul li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	$(".lt").hover(function(){
		$(this).find(".tt-sl").stop().slideToggle();
	})
	
	
	$(".bol button:nth-of-type(1)").click(function(){
		$(".con4-wrap ul li").css({"transform": "translateX(-1200px)", "transition": "all .5s"});
	})
    
    $(".bol button:nth-of-type(2)").click(function(){
		$(".con4-wrap ul li").css({"transform": "translateX(0)", "transition": "all .5s"});
	})
}

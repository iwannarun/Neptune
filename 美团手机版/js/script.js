/*Javascript代码片段*/
$(document).ready(function(){
    var deviceWidth=$(window).outerWidth();
	if(deviceWidth>1080){
    	$("html").css("font-size","100px");    	
	}else{
    	$("html").css("font-size",deviceWidth/1080*100+'px');    	
	}
	var menu_t=$(".menu_nav span");
	var menu_c=$(".menu_down");
	var menu_bg=$(".menu_bg");
	
	menu_t.each(function(index){
		$(this).click(function(){
			$(this).siblings("span").removeClass("menu_this");						
			$(this).addClass("menu_this");	
			var m_this=menu_c.eq(index);			
			m_this.siblings("div").hide();			
			m_this.toggle();
		
			if(m_this.is(':visible')){
				$(this).addClass("menu_this");
				}
			else{
				$(this).removeClass("menu_this");
				}			
			
			if(menu_c.is(':visible')){
				menu_bg.show();				
				$("html,body").css({"height":"100%","overflow":"hidden"});
				
				}
			else{
				menu_bg.hide();
				$("html,body").css({"height":"auto","overflow":"auto"});
				}			
			});
		});		
		
//二级
	var down_t=$(".menu_sort h2");
	var down_c=$(".menu_open");
	
	down_t.each(function(){
		$(this).click(function(){
			down_t.removeClass("sort_this");
			$(this).addClass("sort_this");
			down_c.hide();
			$(this).next("div").show();
			});
		});
	
//点击背景隐藏	
	menu_bg.click(function(){
		$(this).hide();
		menu_t.removeClass("menu_this");
		menu_c.hide();		
		down_t.removeClass("sort_this");
		down_c.hide();
		$("html,body").css({"height":"auto","overflow":"auto"});
		});
		
});
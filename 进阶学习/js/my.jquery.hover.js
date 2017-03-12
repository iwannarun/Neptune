
$.fn.hoverdir = function(){
	
	$(this).on("mouseenter mouseleave",function(e){
		
		e.pageX = e.pageX || (e.clientX + document.body.scrollLeft||document.documentElement.scrollLeft);
		e.pageY = e.pageY || (e.clientY + document.body.scrollTop||document.documentElement.scrollTop);
		
		var x = (e.pageX - $(this).offset().left - (this.offsetWidth / 2)) * (this.offsetWidth > this.offsetHeight ? (this.offsetHeight / this.offsetWidth) : 1);
		var y = (e.pageY - $(this).offset().top - (this.offsetHeight / 2)) * (this.offsetHeight > this.offsetWidth ? (this.offsetWidth / this.offsetHeight) : 1); 
		
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; 
		
		$.Hover.move(direction, $(this), e.type);
		
	});
	
}

$.Hover = {
	move : function(dir, target, InOut){
		var $cover = target.find("div");
		console.log();
		switch(dir) {
			case 0 : {
				if(InOut == "mouseenter") {
					$cover.css("top","-100%");
					$cover.css("left","0");
					$cover.animate({top:0},500);
					console.log("上进");
				} else {
					$cover.animate({top:"-100%"},500);
						console.log("上出");
				}
				break;
			}
			case 1 : {
				if(InOut == "mouseenter") {
					$cover.css("left","100%");
					$cover.css("top","0");
					$cover.animate({left:0},500);
				} else {
					$cover.animate({left:"100%"},500);
				}
				break;
			}
			case 2 : {
				if(InOut == "mouseenter") {
					$cover.css("top","100%");
					$cover.css("left","0");
					$cover.animate({top:0},500);
				} else {
					$cover.animate({top:"100%"},500);
				}
				break;
			}
			case 3 : {
				if(InOut == "mouseenter") {
					$cover.css("left","-100%");
					$cover.css("top","0");
					$cover.animate({left:0},500);
				} else {
					$cover.animate({left:"-100%"},500);
				}
				
			}
			
		}
	}
}
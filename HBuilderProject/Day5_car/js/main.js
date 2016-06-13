
$(function(){

	move();
	carmove();
	makecars();
});
function move(){
	$('.track').animate({'top':'-100%'},3000,'linear',function(){
		$('.track').animate({'top':'0%'},0);
		move();
	});
}
var currentRoad = 2;
function carmove(){
	document.onkeydown=function(ev){
		var e=ev||event;
		var code=e.keyCode;
		if(code==37){
			console.log('向左');
			currentRoad--;
			currentRoad=currentRoad<=0?0:currentRoad;
			
		}
		if (code==39) {
			console.log('向右');
			currentRoad++;
			currentRoad=currentRoad>=4?4:currentRoad;
			
		}
		$('#car').animate({'left':0.5+currentRoad*20+'%'},30);
	}
}

var timer;
function makecars(){
	timer = setInterval(makecar,1000);
}
function makecar(){
	var div = document.createElement('div');
	$('#gamebox').append(div);
	div.className="otherCar";
	var num = Math.random()*5;
	 num=Math.floor(num);
	$(div).css({"left":0.5+num*20+"%"});
	var speed = Math.floor(Math.random()*5000);
	speed=speed<2000?2000:speed;
	$(div).animate({'top':'100%'},speed,function(){
		$(this).remove();
	});
	
	crash(div);
}

function crash(div){
	var car = document.getElementById('car');
	setInterval(function(){
		var left = car.offsetLeft
		var top = car.offsetTop;
		var height = car.offsetHeight;
		var width = car.offsetWidth;
		var divleft = div.offsetLeft;
		var divtop = div.offsetTop;
		
		if (Math.abs(left-divleft)<width&&Math.abs(top-divtop)<height) {
			$(div).remove();
			gameover();
		}
	});
}

function gameover(){
	clearInterval(timer);
	$("#car").animate({"bottom":"-30%"},1000);
	$('#gamebox').animate({"left":"22%"},200,function(){
		$('#gamebox').animate({"left":"26%"},100,function(){
			$('#gamebox').animate({"left":"22%"},200,function(){
				
			});
		});
	});
	$('#restart').fadeIn(200);
}

function restart(){
	window.location.reload();
}

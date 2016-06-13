$(document).ready(function(){

document.onmousewheel=function(){
	return false;
}
var currentpage=0;
$(".innerbox").swipe({swipe:function(event,direction){
	if (direction=='up') {
		console.log('向上');
		currentpage++;
		currentpage=currentpage>3?3:currentpage;
	}
	if (direction=='down') {
		console.log('向上');
		currentpage--;
		currentpage=currentpage<=0?0:currentpage;
	}
	
	$(".innerbox").animate({"top":-100*currentpage+"%"},1000,function(){
			adim();
	});
}});
$(".indexBuilding").fadeIn(2000,function(){
	$(".indexFlight").animate({"width":"80%"},2000);
});


function adim(){
	if(currentpage==1){
		$('.wasBg').fadeIn(1500,function(){
			$('.wasFarm').fadeIn(1555,function(){
				$('.wasIT').fadeIn(1500,function(){
					$('.wasStar').fadeIn(0);
					$('.wasStar').animate({'right':'-100%','top':'-100%'},2000);
				});
			});
		})
	}
	if(currentpage==2){
		$('.bus').animate({'left':'-55%'},1900,function(){});
		$('.lastBusAvatar').animate({'left':'20%'},3000);
		$('.earlyTitle').fadeIn(1500,function(){			
		
			$('.lastBusTitle').fadeIn(2000,function(){
				$('.index3').fadeOut(100,function(){
					$('.lastBusAvatar').hide();
				});
			
					$('.myTeamWall').fadeIn(500,function(){
						$('.myTeamAvatar').fadeIn(0,function(){
							$('.myTeamSpace').fadeIn(500,function(){
								$('.myteamWhereTxt').animate({"width":"50%"},500);
							});
						});
					});
				
				
				
			});
		});
		
		$('.lightOff').click(function(){
		
			$('.lightOff').attr('src','img/lightOn.png');
			$('.lightOffBg').fadeOut(1000,function(){
					$('.clickGuide').fadeOut(0);	
						$('.cornerTitle').fadeOut(100,function(){
							$('.weKnowYou').fadeIn(500,function(){
								$('.lightOnBg').fadeIn(1000);
							});
							
						});
			});
			
		});
		
		
	}
}
});

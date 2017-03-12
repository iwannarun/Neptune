
/*
	//box
	parabola(box, targetObj);
*/

function parabola(obj, targetObj){
	var centerCoord = {
		x : obj.offsetLeft,
		y : obj.offsetTop
	}
	var targetCoord = {
		x : targetObj.offsetLeft - centerCoord.x,
		y : targetObj.offsetTop - centerCoord.y
	}
	
	var a = 0.003;
	var b = (targetCoord.y - a*targetCoord.x*targetCoord.x)/targetCoord.x;
	
	var disX = 0;
	var timer = setInterval(function(){
		obj.style.left = centerCoord.x + ++disX + "px";
		obj.style.top = centerCoord.y + (a*disX*disX + b*disX) + "px";
		if(obj.offsetLeft == targetObj.offsetLeft) {
			clearInterval(timer);
		}
	},30);
}
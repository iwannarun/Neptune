var imgs =["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
var length = imgs.length;
var flag = true;//默认顺序
var index = 1;
var num = document.getElementById("num");
var title = document.getElementById("title");
title.innerText = imgs[index-1].substr(4);
num.innerText = index +'/'+length;

function pre(){
	var img = document.getElementById("cur");
	index = index - 1;
	if(flag){
		if(index==0){
			alert("已经是第一张图片了！无法继续往前！");
			document.getElementById("pre").style.backgroundImage = "url(img/arrow_left_alt_32px_1119763_easyicon.net.png)";
			index = 1;
		
			
		}else{
			document.getElementById("cur").src=imgs[index-1];
			num.innerText = index +'/'+length;
			title.innerText = imgs[index-1].substr(4);
			document.getElementById("next").style.backgroundImage = "url(img/arrow_right_alt_32px_1158844_easyicon.net.png)";

		}
	
	}else{
		
		if(index==0){
			index = length;			
		}
		
		document.getElementById("cur").src=imgs[index-1];
		num.innerText = index +'/'+length;
		title.innerText = imgs[index-1].substr(4);
	}
	
}

function next(){
	var img = document.getElementById("cur");
	index = index + 1;
	if(flag){
		if(index>4){
			alert("已经是最后一张图片了！无法继续翻页！");			
			document.getElementById("next").style.backgroundImage = "url(img/arrow_right_alt_32px_1119766_easyicon.net.png)";
			index = 4;
			
		}else{
			document.getElementById("cur").src=imgs[index-1];
			document.getElementById("pre").style.backgroundImage = "url(img/arrow_left_alt_32px_1158841_easyicon.net.png)";
		
			num.innerText = index +'/'+length;
			title.innerText = imgs[index-1].substr(4);
		}
	
	}else{
		
		if(index>length){
			index = 1;			
		}
		
		document.getElementById("cur").src=imgs[index-1];
		num.innerText = index +'/'+length;
		title.innerText = imgs[index-1].substr(4);
	}
	
}
function changeSpectail(){
	flag = false;
	index = 1;
	document.getElementById('info').innerText = "已切换到循环模式";
	document.getElementById("pre").style.backgroundImage = "url(img/arrow_left_alt_32px_1158841_easyicon.net.png)";
	document.getElementById("next").style.backgroundImage = "url(img/arrow_right_alt_32px_1158844_easyicon.net.png)";

	
}
function changeNormal(){
	flag = true;
	index = 1;
	document.getElementById('info').innerText = "已切换到顺序模式";
	document.getElementById("pre").style.backgroundImage = "url(img/arrow_left_alt_32px_1158841_easyicon.net.png)";
	document.getElementById("next").style.backgroundImage = "url(img/arrow_right_alt_32px_1158844_easyicon.net.png)";

}

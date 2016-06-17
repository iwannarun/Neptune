

$(function() {
	
	var $plateBox = $(".plateBox");
	
	$plateBox.css("transform-origin", "50% 50%");
	$plateBox.css("transform", "rotate(0deg)");
	
	addClick();
});

function getToday() {
	var today = new Date();
	
	var ret = ""; 
	ret += today.getFullYear();
	ret += today.getMonth();
	ret += today.getDate();
	
	
	console.log(ret);
	
	return ret;
}

function startGame(code) {
	
	removeClick();
	
	var runInfo = loadAppData();
	
	if (!runInfo) {
		runInfo = {
			"day": getToday(),
			"firstPrize": false,
			"count": 0
		}
	}
	
	if (!checkUser(runInfo)) {
		
		addClick();
		
		return ;
	}
	
	
	var $plateBox = $(".plateBox");
	
	// 获取当前这个盘的旋转角度
	var startDegree = getBoxCurrentDegree($plateBox);
	
	startDegree = startDegree % 360;
	console.log('当前旋转角度:'+startDegree);
	$plateBox.css({"transform": "rotate(" + startDegree + "deg)"});
		
		
	playAnimate($plateBox, code);
	
	runInfo.day = getToday();
	if (code == 1) {
		runInfo.firstPrize = true;
	}
	runInfo.count++;
	
	saveAppData(runInfo);
}


function checkUser(runInfo) {
	var ret = true;
	
	
	var today = getToday();
//	
//	console.log("today: " + today);
//	console.log("runInfo.day: " + runInfo.day);
	
	
	if (today == runInfo.day && runInfo.count >= 3) {
		alert('一天之内不能超过三次!');
		
		return false;
	}
	
	if (today == runInfo.day && runInfo.firstPrize) {
		
		alert("一天之内只能抽中一次奖!");
		
		return false;
	}
	
	return ret;
}


function addClick() {
	$(".handBox").on("click", function() {
		var code = Math.ceil(Math.random() * 8);
//		code = 1;
		console.log('目标奖项:'+code)
		startGame(code);
	});
}

function removeClick() {
	$(".handBox").off("click");
}

function loadAppData() {
	var runInfo = window.localStorage.runInfo;
	
	var obj = null; 
	
	if (runInfo) {
		obj = JSON.parse(runInfo);
	}
	
	return obj;
}

function saveAppData(data) {
	
	var runInfo = JSON.stringify(data);
	
	window.localStorage.runInfo = runInfo;
}


// 说明 code 代表抽到几等奖
function playAnimate($plateBox, code) {
	
	var deta = code - 1;
	var rotateDegree = deta * (360 / 8);
	
	rotateDegree = 360- rotateDegree;
	
	
	console.log("需要转的角度:"+rotateDegree);
	
	var timer = setInterval(function() {
		// 获取当前这个盘的旋转角度
		var startDegree = getBoxCurrentDegree($plateBox);
		
		var speed = Math.ceil((rotateDegree - startDegree) / 10);
		
		console.log("每次转的角度："+speed);
		
		var currentDegree = startDegree + speed;
		console.log('当前已旋转到的角度:'+ currentDegree);
//		console.log("currentDegree:" + currentDegree);
		
		$plateBox.css({"transform": "rotate(" + currentDegree + "deg)"});
		
		if (currentDegree >= rotateDegree) {
			clearInterval(timer);
			
			alert("恭喜您抽到了" + code + "等奖!");
			
			addClick();
		}

	}, 100);
	
//	$plateBox.css("transform", "rotate("+rotateDegree+"deg)");
}

function getBoxCurrentDegree($plateBox) {
	var str = $plateBox[0].style.transform;
	
//	console.log(str);
	
//	var start = str.indexOf("(");
//	var end = str.indexOf("deg");
//	
//	start += 1;
//	
//	var data = str.substr(start, end-start);
//	
//	console.log(data);


	var regexResult = str.match(/rotate\(([\d]+)\w+\)/);
//	var regexResult = str.match(/rotate\(([\d]+)\w+\)/);

//	var regexResult = str.match(/rotate\(([^\)]+)\)/);

//	console.log(regexResult);
	
	var data = regexResult[1];

//	console.log(data);

	var degree = parseInt(data);
	
//	console.log(degree);
	
	
	return degree;
}

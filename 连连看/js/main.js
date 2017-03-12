

var gLine = 2;
var gSpace = 10;


function createBlocks(line, space) {
	
	var count = line * line;
	
	var blockWidth = (window.innerWidth - space) / line - space;
	var blockHeight = blockWidth;
	
	
	var rndIndex = Math.floor(Math.random() * count);
	
	
	
	// 产生随机数的范围 0x50 <= value <= 0xffffff
	var rndValue = Math.floor((Math.random() * 0xffffb0)) + 0x50;
	var color = '#' + rndValue.toString(16);
	
	for (var i = 0; i < count; i++) {
		
		var $block = $("<div class='block'></div>");
		
		$block.css("width", blockWidth);
		$block.css("height", blockHeight);
		
		$block.css("background", color);
		
		
		// 绑定点击事件
		$block.bind("click", clickWrong);
		
		if (i == rndIndex) {
			var newColorValue = rndValue - 0x50;
			var newColor = '#' + newColorValue.toString(16);
			
			$block.css("background", newColor);
			
			$block.css("border", "1px solid orange");
			
			$block.unbind("click");
			$block.bind("click", clickRight);
		}
		
		// 已知方块的序号，求 方块的 row， col
		
		var row = parseInt(i / line);
		var col = i % line;
		
		
		var deta = (window.innerHeight - gLine * (blockWidth + space)) / 2;
		
		
		var leftX = col * (blockWidth + space) + space;
		var leftY = row * (blockWidth + space) + space;
		
		leftY += deta;

//		console.log(row + ": "  + col);
		
		$block.css("top", leftY);
		$block.css("left", leftX);
		
		$block.appendTo(".gameBox");
	}
	
}


function clickWrong() {
	
	var text = '';
	if (gScore < 1) {
		text = '平民';
		
	} else if (gScore < 2) {
		text = '色狼';
	
	} else if (gScore < 3) {
		text = '色魔'; // 色鬼
	
	} else if (gScore < 4) {
		text = '人体艺术师'; // 色鬼
	}
	
	$(".gameOver .level").text(text);
	
	$(".gameOver").removeClass("hidden").addClass("show");

}

var gClickStep = 0;
var gLevelSteps = 3;

var gScore = 0;

function clickWrong() {
	$(".gameOver").removeClass("hidden").addClass("show");
	
	var level = "平民";
	if (gLevel < 1) {
		level = "平民";
	} else if (gLevel < 2) {
		level = "色狼";
	} else if (gLevel < 3) {
		level = "色魔";
	} else if (gLevel < 4) {
		level = "人体艺术家";
	}
	
	$(".gameOver .level").text(level);
}


// 分数
var gScore = 0;

// 升级的个数
var gLevelCount = 2;

// 当前的级别
var gLevel = 0;

var gStep = 0;

function clickRight() {
	gScore ++;
	
	gStep++;
	
	if (gStep > gLevelCount) {
		// 行数增1
		gLine++;

		gLevel++;

		// 清0用作判断的步数
		gStep = 0;
	}
	
	$(".block").remove();
	
	createBlocks(gLine, gSpace);
}


$(function() {
	
	$(".startGame").click(function() {
		
		var $titleBox = $(".titleBox");
		
		$titleBox.addClass("hidden");
		
		var $gameBox = $(".gameBox");
		
		$gameBox.removeClass("hidden");
		
		$(this).addClass("hidden");
		
		createBlocks(gLine, gSpace);
	});
	
	
	$(".gameOver .restartButton").click(function() {
		
		$(".gameOver").removeClass("show").addClass("hidden")
		
		$(".block").remove();
		
		gLine = 2;
		gScore = 0;
		gLevel = 0;
		
		createBlocks(gLine, gSpace);
	});
});

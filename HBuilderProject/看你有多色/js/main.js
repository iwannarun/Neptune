var gLine = 2;
var gSpace = 10;
var color = "";
var gScore = 0;
var gClickStep = 2;
var gLevelSteps = 0;

function clickWrong(){
	var text = "";
	if(gScore < 1){
		text = '平民';
	} else if(gScore < 2){
		text = '色狼';
	} else if(gScore < 3){
		text = '色魔';
	} else{
		text = '人体艺术师';
	}
	$('.gameOver .level').text(text);
	$('.gameOver').addClass('show');
}

function clickRight(){
	gScore++;
	gLevelSteps++;
	$('.block').remove();
	if(gLevelSteps == 3){
		gClickStep ++;
		gLevelSteps = 0;
	}

	
	createBlocks(gClickStep,10);
}

function createBlocks(line, space){
	var count = line * line;	
	var blockWidth = (window.innerWidth - gSpace) / line - space;
	var blockHeight = blockWidth;
	//随机块
	var rndValue = Math.floor(Math.random()*0xFFFFB0) + 0X50;
		var newColorValue = rndValue + 0x50;
		var normColor = '#'+ rndValue.toString(16);
		var rndColor = '#'+ newColorValue.toString(16);
	var rndIndex = Math.floor(Math.random()*count);
	for (var i = 0; i < count; i++) {
		var $block = $("<div class='block'></div>")
		
		$block.css("width", blockWidth);
		$block.css("height", blockHeight);
		//[0X50,0X1000000]
		
	    color = rndIndex == i ? rndColor : normColor;

		$block.css('background',color);
		
		var row = parseInt(i / line);
		var col = i % line;
		//居中增量
		var odd = (window.innerHeight - line * (blockHeight + space)	) / 2 ;
		var leftX = col * (blockWidth + space) + space;
		var leftY = row * (blockWidth + space) + space + odd;
		console.log(row+":"+col);
		if(rndIndex == i){
			$block.on('click',function(){
				$block.css('border', '2px solid black');
				clickRight();
					
			});
		}else{
			$block.on('click',function(){
				clickWrong();
			});

		}
		$block.css('top',leftY);
		$block.css('left',leftX);
		$block.appendTo('.gameBox');
		
	}
}

$(function(){
	$(".startGame").click(function(){
		$('.titleBox').addClass('hidden');
		$('.gameBox').addClass('show');
		createBlocks(gLine,gSpace);	
		$('.startGame').addClass('hidden');
	});
	
	$('.gameOver .restartButton').click(function(){
		$('.gameOver').removeClass('show');
		
		//清空数据
		gScore = 0;
		gClickStep = 2;
		$('.block').remove();
		createBlocks(gClickStep, gSpace);
	});
});

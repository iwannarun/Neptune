
$(function() {

	// 创建游戏对象
	var gameBox = new GameBox();
			
	$(".startGame").click(function() {
		
		var $titleBox = $(".titleBox");
		
		$titleBox.addClass("hidden");
		
		var $gameBox = $(".gameBox");
		
		$gameBox.removeClass("hidden");
		
		$(this).addClass("hidden");
		
		// 初始化整个游戏
		gameBox.initGame();
	});
	
	
	$(".gameOver .restartButton").click(function() {
		
		$(".gameOver").removeClass("show").addClass("hidden")
		
		gameBox.initGame();
	});
	
	
});

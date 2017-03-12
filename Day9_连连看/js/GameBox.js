
// 类 GameBox
function GameBox() {

	this.line = 5;
	this.space = 10;

	this.arr = [];
	
	// 用于记录用户此前点击的那个块对象
	this.prevBlock = null;
}

GameBox.prototype = {

	initGame: function() {
		this.createBlocks();

		this.randomBlocksColor();
	},


	// 获取传入点坐标的相邻点坐标，用于设置相邻的点颜色为相同的效果
	// 【注意】此函数需要返回两个结果，所以通过返回对象的方式实现
	getNewNextPoint: function(row, col) {

		// 新点的坐标， 新的x， 新的y
		var newX = row;
		var newY = col;

		var rnd = Math.floor(Math.random() * 2);
		if (rnd == 0) {
			newX = row - 1;
		} else {
			newX = row + 1;
		}

		rnd = Math.floor(Math.random() * 2);
		if (rnd == 0) {
			newY = col - 1;
		} else {
			newY = col + 1;
		}

		if (newX < 0) {
			newX = 0;
		} else if (newX >= this.line) {
			newX = this.line - 1;
		}

		if (newY < 0) {
			newY = 0;
		} else if (newY >= this.line) {
			newY = this.line - 1;
		}
		var obj = {};

		obj.row = newX;
		obj.col = newY;

		return obj;
	},


	// 用于将盒子中所有 Block 的颜色，随机设置成相同颜色
	randomBlocksColor: function() {

		for (var i = 0; i < this.arr.length; i++) {
			// 设置一个block

			var rndValue = Math.floor((Math.random() * 0xffffb0)) + 0x50;
			var color = '#' + rndValue.toString(16);

			var row = parseInt(i / this.line);
			var col = i % this.line;

			var point = this.getNewNextPoint(row, col);

			var newX = point.row;
			var newY = point.col;

			// 到这里，得到新点坐标 (newX, newY)
			var index = newX * this.line + newY;

			this.arr[i].setNewColor(rndValue);
			this.arr[index].setNewColor(rndValue);

			// 在元素中添加新的状态属性 colorState，用于判断两个元素它的值是否一致
			this.arr[i].colorState = i;
			this.arr[index].colorState = i;
		}

	},

	// 创建游戏盒子中所有的代码块
	createBlocks: function() {
		var count = this.line * this.line;

		var blockWidth = (window.innerWidth - this.space) / this.line - this.space;
		var blockHeight = blockWidth;

		var rndIndex = Math.floor(Math.random() * count);

		// 产生随机数的范围 0x50 <= value <= 0xffffff
		var rndValue = Math.floor((Math.random() * 0xffffb0)) + 0x50;
		var color = '#' + rndValue.toString(16);

		for (var i = 0; i < count; i++) {

			// 已知方块的序号，求 方块的 row， col
			var row = parseInt(i / this.line);
			var col = i % this.line;

			var deta = (window.innerHeight - this.line * (blockWidth + this.space)) / 2;

			var leftX = col * (blockWidth + this.space) + this.space;
			var leftY = row * (blockWidth + this.space) + this.space;

			leftY += deta;

			var $block = new Block();


			var point = {};

			point.row = row;
			point.col = col;
			
			// 因为点击事件的响应函数中，this 变成了 block 对象，这样就不能通过this访问arr
			// 所以，通过添加一个属性，将当前 gamebox对象传递过去
			point.gameBox = this;

			// 通过对象中的方法来设置点击事件为 当前类中的方法
			$block.setClickHandle(point, this.clickBlock);

			$block.leftX = leftX;
			$block.leftY = leftY;

			$block.colorValue = rndValue;
			$block.blockWidth = blockWidth;

			$block.show();

			this.arr.push($block);
		}

	},

	// 点击块的响应函数
	clickBlock: function(event) {
		var data = event.data;

		var row = data.row;
		var col = data.col;
		
		// 【注意】 此方法中的 this 是所点击元素对象
		// 所以需要通过事件中 data 属性来获取 gameBox对象，从而获取保存 block 的数组
		var gameBox = data.gameBox;

		var index = row * gameBox.line + col;

		if (gameBox.prevBlock == null) {
			// 之前的点为空时，说明是第一次点击
			
			gameBox.prevBlock = gameBox.arr[index];

		} else {
			// 说明这是第二次点击

			if (gameBox.prevBlock != gameBox.arr[index] && 
				gameBox.arr[index].colorState == gameBox.prevBlock.colorState) {
				// 排除点击同一个元素的情况
				// 说明是第二次点击，并且点击的是同一种颜色的元素

				gameBox.prevBlock.xiaoshi();
				gameBox.arr[index].xiaoshi();
			}

			gameBox.prevBlock = null;
		}
	}

};
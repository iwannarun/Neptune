


// 创建类 Block
// 其中的属性 通过 this 的方式添加
function Block() {
	
	
	// 颜色值
	this.colorValue = 0;
	
	this.leftX = 0;
	this.leftY = 0;
	
	this.blockWidth = 0;
	
	
	// Block 的 DOM 元素
	this.elem = $("<div class='block'></div>");
}


// 在这里设置 类 中的方法
Block.prototype = {
	
	
	// 通过此函数，设置点击处理函数
	// data: 需要传递给点击函数的参数
	// fnClick: 点击此块的消息处理函数
	setClickHandle: function(data, fnClick) {
		
		// 将传递过来的参数绑定到 DOM 元素中
		this.elem.bind("click", data, fnClick);
	},
	
	
	// 消失： 用于隐藏当前此元素
	xiaoshi: function() {
		this.elem.remove();
	},
	
	
	// 设置新的颜色，将此函数中的参数传递给当前对象，并更新 DOM元素的背景颜色
	setNewColor: function(colorValue) {
		this.colorValue = colorValue;
		
		var color = '#' + this.colorValue.toString(16);
		this.elem.css("background", color);
	},
	
	// 将创建好的元素添加到 .gameBox 元素中，从而实现界面上显示的效果
	// 通过对象中的一些属性来设置当前创建的元素
	show: function() {
		
		this.elem.css("width", this.blockWidth);
		this.elem.css("height", this.blockWidth);
		
		var color = '#' + this.colorValue.toString(16);
		
		this.elem.css("background", color);
		this.elem.css("top", this.leftY);
		this.elem.css("left", this.leftX);
		
		this.elem.appendTo(".gameBox");
	}
	
};


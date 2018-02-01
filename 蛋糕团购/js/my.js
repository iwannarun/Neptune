mui.plusReady(function(){
	//首页
	$("#index").on("tap",function(){
		mui.openWindow({
			url:"../index.html",
			id:"index",
			
			createNew:true,
		})
	})
	//地址管理
	$("#address").on("tap",function(){
		mui.openWindow({
			url:"address.html",
			id:"address",
			
			createNew:true,
		})
	})
	//优惠券
	$("#youhuiquan").on("tap",function(){
		mui.openWindow({
			url:"youhuiquan.html",
			id:"youhuiquan",
			
			createNew:true,
		})
	})
	//订单管理
	$(".dingdan").on("tap",function(){
		mui.openWindow({
			url:"dingdan.html",
			id:"dingdan",
			extras:{
				laiyuan:$(this).text().replace(/\s/g, ""),
			},
			createNew:true,
		})
	})
})

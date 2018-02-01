mui.init();
mui.plusReady(function(){
	document.getElementById("weizhi").addEventListener("tap",function(){
		mui.openWindow({
			url:"template/area.html",
			id:"area",
			createNew:true
		})
	})
	function geoInf( position ) {
	
	JSON.stringify(position);
	
	
	if (position.address == null) {
		document.getElementById("weizhi").innerHTML='全国<span class="mui-icon mui-icon-arrowdown"></span>';
	} else{
		document.getElementById("weizhi").innerHTML=''+position.address.city+'<span class="mui-icon mui-icon-arrowdown"></span>';
	}
	
	
}
	if (plus.storage.getItem("dingwei") == null) {
		plus.geolocation.getCurrentPosition(geoInf, function(e) {
			console.log("获取定位位置信息失败：" + e.message);
		}, {
			geocode: true,
			provider: 'amap'
		});
	} else {
		document.getElementById("weizhi").innerHTML =''+plus.storage.getItem("dingwei")+'<span class="mui-icon mui-icon-arrowdown"></span>';
	}
	var viewmore=document.getElementById("viewmore");
	var wode=document.getElementById("wode");
	$("#callme").on("tap",function(){
		void plus.device.dial('1863308079', true);
	})
	wode.addEventListener("tap",function(){
		mui.openWindow({
			url:"template/my.html",
			id:"my",
			createNew:true,
		})
	})
	$(".shoudan").on("tap",function(){
		mui.openWindow({
			url:"template/viewdan.html",
			id:"viewdan",
			createNew:true,
		})
	})
	viewmore.addEventListener("tap",function(){

		mui.openWindow({
			url:"template/dangao.html",
			id:"dangao"
		})
	})
})
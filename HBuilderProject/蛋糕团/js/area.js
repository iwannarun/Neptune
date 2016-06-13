mui.plusReady(function() {
	function geoInf(position) {

		JSON.stringify(position);
		
		if (position.address == null) {
			document.getElementById("dingwei").innerHTML = '<font color="#ccc">定位失败</font>';
		} else {
			document.getElementById("dingwei").innerHTML = '' + position.address.city + '';
		}

	}
	$(".mui-indexed-list-item").on("tap", function() {
		var chengshi = $(this).text();
		plus.storage.setItem("dingwei", chengshi);
		console.log('reloading');
		plus.webview.getLaunchWebview().reload();
		plus.webview.currentWebview().close();
	})
	plus.geolocation.getCurrentPosition(geoInf, function(e) {
			console.log("获取定位位置信息失败：" + e.message);
		}, {
			geocode: true,
			provider: 'amap'
		});
})
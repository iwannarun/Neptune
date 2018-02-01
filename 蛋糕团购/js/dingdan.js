mui.plusReady(function(){
	var dq = plus.webview.currentWebview();
	var head=document.getElementById("head");
	switch (dq.laiyuan){
		case "待付款":
			head.innerHTML="待付款";
			break;
		case "待发货":
			head.innerHTML="待发货";
			break;
		case "待收货":
			head.innerHTML="待收货";
			break;
		case "待评价":
			head.innerHTML="待评价";
			break;
		case "退款":
			head.innerHTML="退款";
			break;
		default:
			head.innerHTML="全部订单";
			break;
	}
	var guangguang=document.getElementById("guangguang");
	guangguang.addEventListener("tap",function(){
		mui.openWindow({
			url:"../index.html",
			id:"index",
			createNew:true
		})
	})
})
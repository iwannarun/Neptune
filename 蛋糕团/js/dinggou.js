mui.plusReady(function(){
	var tijiaodingdan=document.getElementById("tijiaodingdan");
	var shouhuorenvalue=document.getElementById("shouhuorenvalue");
	var songdavalue=document.getElementById("songdavalue");
	var dinggourenvalue=document.getElementById("dinggourenvalue");
	var isLogin=plus.storage.getItem("isLogin");
	var shouhuoren=document.getElementById("shouhuoren");
	var dinggouren=document.getElementById("dinggouren");
	dinggouren.addEventListener("tap",function(){
		mui.openWindow({
			url:"adddinggou.html",
			id:"adddinggou",
			extras:{
				dinggou:true,
			},
			createNew:true,
		})
	})
	if (plus.storage.getItem("shouhuoren")) {
		var shouhuorenshang=document.getElementById("shouhuorenshang");
		var shouhuoxinagqing=document.getElementById("shouhuoxiangqing");
		shouhuorenshang.innerHTML=plus.storage.getItem("shouhuoren")+" "+plus.storage.getItem("shoujihaoma");
		shouhuoxinagqing.innerHTML=plus.storage.getItem("peisong");
	}
	if (plus.storage.getItem("dinggouname")) {
		var dinggouderen=document.getElementById("dinggouderen");
		dinggouderen.innerHTML=plus.storage.getItem("dinggouname")+" "+plus.storage.getItem("dinggoutel");
	}
	var peitime=document.getElementById("peitime");
	if (plus.storage.getItem("peitime")) {
		peitime.innerHTML=plus.storage.getItem("peitime");
	}
	var songdashijian=document.getElementById("songdashijian");
	songdashijian.addEventListener("tap",function(){
		var myDate = new Date();
		var picker=new mui.DtPicker({"type":"hour","beginYear":myDate.getFullYear(),"endYear":myDate.getFullYear()+1,"customData":{"h":[{"text":"上午","value":"上午"},{"text":"下午","value":"下午"},{"text":"晚上","value":"晚上"}]},"labels":["年", "月", "日", "时段", "分"]});
		picker.show(function(rs){
			
			plus.storage.setItem("peitime",rs.text);
			peitime.innerHTML=rs.text;
		});
	})
	shouhuoren.addEventListener("tap",function(){
		mui.openWindow({
			url:"addshouhuo.html",
			id:"addshouhuo",
			extras:{
				dinggou:true,
			},
			createNew:true,
		})
	});
	
	tijiaodingdan.addEventListener("tap",function(){
//		if (shouhuorenvalue.value == '') {
//			plus.nativeUI.toast("请填写收货信息");
//			return;
//		}
//		if (songdavalue.value == '') {
//			plus.nativeUI.toast("请选择送达时间");
//			return;
//		}
//		if (dinggourenvalue.value == '') {
//			plus.nativeUI.toast("请填写订购人的信息");
//			return;
//		}
		
		if (plus.storage.getItem("isLogin") == null) {
			mui.openWindow({
				url:"login.html",
				id:"login",
				createNew:true,
			})
		}else{
			plus.storage.removeItem("songdashijian");
			
			plus.nativeUI.toast("订单成功");
			
			

			mui.openWindow({
				url:"../index.html",
				id:"index",
				createNew:true,
			})
		}
	
	})
})
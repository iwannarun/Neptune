
mui.plusReady(function () {
    
    mui("#danlist").on("tap","li",function(){
    	  	mui.openWindow({
    	  		url:"viewdan.html",
    	  		id:"viewdan"
    	  		
    	  	});
    		
    });
	
})
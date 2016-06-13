var imgs =["img/1.jpg","img/2.jpg","img/3.jpg"];
var imgs2 =["img/3.jpg","img/2.jpg","img/1.jpg"];
var c = new Array(3);
var tab1 = document.getElementById("sub1");
tab1.onclick=function(){
	c = [];
	c = [].concat(imgs);
	tab1.style.background ="#005A63";
	tab1.style.color ="#ffffff";
	tab2.style.background ="#94FFC6";
	tab2.style.color ="#000000";
	

}

var tab2 = document.getElementById("sub2");
tab2.onclick=function(){
	c = [];
	c = [].concat(imgs2);
	tab2.style.background ="#005A63";
	tab2.style.color ="#ffffff";
	tab1.style.background ="#94FFC6";
	tab1.style.color ="#000000";
}


function hover(e){

	document.getElementById('cur').src = c[e.id-1];
}

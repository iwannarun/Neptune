
$(function(){
	var url = 'phones/phones.json';
	$.get(url,function(data){
		var arr = data;
		var $phones = $(".phones");
		for (var i = 0; i < arr.length; i ++) {
			var obj = arr[i];
			
			var html = "";
			
			html += '<li ng-repeat="phone in phones | filter:query | orderBy:orderProp" class="thumbnail">';
			html += '<a href="#/phones/{{phone.id}}" class="thumb"><img ng-src="{{phone.imageUrl}}"></a>';
			html += '<a href="#/phones/{{phone.id}}">{{phone.name}}</a>';
			html += '<p>{{phone.snippet}}</p>';
			html += '</li>';
			$phones.append(html);
		}
	});
});
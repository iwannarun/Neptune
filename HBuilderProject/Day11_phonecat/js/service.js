var phonecatServices = angular.module('phonecatServices',['ngResource']);
phonecatServices.factory('Phone',function($resource){
	return $resource('phones/:phoneId.json',{},{
		query:{method:'GET',params:{phoneId:'phones'},isArray:true}//restful风格请求
	});
});

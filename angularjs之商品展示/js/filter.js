var phonecatFilters = angular.module('phonecatFilters',[]);
phonecatFilters.filter('checkmark',function(){
	return function(data){
		return data?'\u2713':'\u2718'; //打勾打叉
	}
});
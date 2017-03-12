var phonecatApp = angular.module('phonecatApp',[
	'ngRoute',
	'phonecatControllers',
	'phonecatFilters',
	'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/phones',{
							templateUrl:'template/phone_list.html',
							controller:'PhoneListCtrl'
						})
					  .when('/phones/:phoneId',{
					  	templateUrl:'template/phone_detail.html',
					  	controller:'PhoneDetailCtrl'
					  })
					  .otherwise({
					  	redirectTo:'/phones'
					  });
	}]);

var phonecatControllers = angular.module('phonecatControllers',[]);


//写法一，这种方法不要servicr.js
/*phonecatControllers2.controller( 'PhoneListCtrl',function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
});
phonecatControllers2.controller('PhoneDetailCtrl', function ($scope, $routeParams,$http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
});*/

//写法二，需要service.js
phonecatControllers.controller('PhoneListCtrl',['$scope','Phone',
	function($scope,Phone){
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
	}
	  
]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','Phone',
	function($scope,$routeParams,Phone) {
		 $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
	}
]);
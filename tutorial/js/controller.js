var phoneControllers = angular.module('phoneControllers', []);

phoneControllers.controller("phoneList", ['$scope', '$http', function($scope, $http){

    $http.get("js/data.json").success(function(data){
        $scope.phones = data;
    });

    $scope.orderPhone = "name";
}]);

phoneControllers.controller("phoneDetail", ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = $routeParams.name;
}]);


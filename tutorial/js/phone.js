var phoneApp = angular.module("phoneApp", []);

phoneApp.controller("phoneList", function($scope, $http){

    $http.get("js/data.json").success(function(data){
        $scope.phones = data;
    });

    $scope.orderPhone = "name";
});
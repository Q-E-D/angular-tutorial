var phoneApp = angular.module("phoneApp", ['ngRoute', 'phoneControllers']);

phoneApp.config(['$routeProvider', function($rp){
    $rp.when("/", {
            templateUrl: "views/list.html",
            controller: "phoneList"
        }).
        when("/:name", {
            templateUrl: "views/detail.html",
            controller: "phoneDetail"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);
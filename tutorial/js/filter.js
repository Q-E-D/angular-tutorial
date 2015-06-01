angular.module('phoneFilters', []).filter('priceFilter', function(){
    return function (input) {
        return input < 2700 ? '\u2713' : '\u2718';
    }
});

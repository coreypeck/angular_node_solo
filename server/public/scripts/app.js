/**
 * CLIENT-SIDE JAVASCRIPT
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/partials/reghero.html',
            controller: "heroCreateController"
        })
        .when('/registered', {
            templateUrl: "/views/partials/registeredheros.html",
            controller: "heroRemoveController"
        })
        .otherwise({
            redirectTo: 'home'
        })
}]);

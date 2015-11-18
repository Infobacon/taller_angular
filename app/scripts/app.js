(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/actors', {
            templateUrl:'views/actors.html',
            controller:'ActorsCtrl'
        })
        .when('/actorsdetail/:actorId/', {
            templateUrl:'views/actorsdetail.html',
            controller:'ActorsdetailCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();

angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
    });
angular.module('angularSpa')
    .service('actorsdetailService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend/actors/';
        this.getActorsId = function(actorId){
            return $http.get(urlBase+actorId);
        };
    });
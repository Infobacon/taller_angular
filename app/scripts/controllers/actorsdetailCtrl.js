    
    angular.module('angularSpa')
    .controller('ActorsdetailCtrl', ['$scope','$routeParams','$http',
        function($scope, $routeParams, $http) {
            $http.get('http://localhost:8080/sakila-backend/actors/'+ $routeParams.actorId )
            .success(function(data) {
                $scope.actor = data;
            });
            // body...
        }]);
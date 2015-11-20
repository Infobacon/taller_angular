    angular.module('angularSpa')
    .controller('ActorsdetailCtrl', function($scope, actorsdetailService, $routeParams){
        $scope.actor =[];
        function getActorsId(){
            actorsdetailService.getActorsId($routeParams.actorId)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getActorsId();
    });
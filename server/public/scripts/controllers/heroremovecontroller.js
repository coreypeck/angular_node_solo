app.controller('heroRemoveController', ['$scope', '$http', function($scope, $http) {

    $scope.heros = [];

    $scope.getHeros = function() {
        console.log("GetHeros is running!");
        $http.get('/heros')
            .then(function(response) {
                console.log('GET /heros', response.data);

                var heroDataArray = response.data;

                console.log(heroDataArray);

                $scope.heros = heroDataArray;
            });
    }
    $scope.removeHero = function(id) {
        $http.delete('/heros/' + id)
            .then(function() {
                console.log('DELETE /heros/', id);
                $scope.getHeros();
            });
    };
    angular.element(document).ready($scope.getHeros);
}]);

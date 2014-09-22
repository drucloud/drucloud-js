var myApp = angular.module('myApp', ['ngSanitize']);

function Hello($scope, $log, $http) {
    $scope.node = [];
   $http({method: 'GET', url: 'http://localhost/drupal8.14/node/20', headers: {'Accept': 'application/hal+json'}}).
        success(function(data) {
            $scope.node = data;
        });
 
}


    //$http({method: 'GET', url: 'http://localhost/drupal8.14/node/1', headers: {'Accept': 'application/hal+json'}}).
    //$http.get('http://rest-service.guides.spring.io/greeting').
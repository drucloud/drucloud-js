var myApp = angular.module('myApp', ['ngSanitize']);

	function Hello($scope, $log, $http) {
    $scope.node = [];
    var request = $http({
    method: 'POST', 
    url: 'http:///localhost/drupal8.14/entity/node', 
    headers: { 
    	"Content-Type" : 'application/hal+json',
    	"Authorization" : 'Basic Ym9vdGRldjpib290ZGV2'
    }, 
    data : {

    "_links" : {
    	"type":
    		{
    		"href":"http://localhost/drupal8.14/rest/type/node/page"
    		}
    },
    "langcode": [
        {
            "value": "en"
        }
    ],
    "title" : {"value":"My Test posting with content4"},
    "body": [
        {
            "value": "FUCK",
            "format": "basic_html",
            "summary": "",
            "lang": "en"
        }
    ]},

    
    cache : false
    });
        request.success(function(html){$scope.node_success = html;});
        request.error(function(html){$scope.node_error = html;});
}

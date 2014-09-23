var myApp = angular.module('myApp', ['ngSanitize']);

	function Hello($scope, $log, $http) {
    $scope.node = [];
    var request = $http({
    method: 'PATCH', 
    url: 'http:///localhost/drupal8.14/node/11', 
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
    "title" : {"value":"My Test Post node = 11"},
    "body": [
        {
            "value": "<h1>Welcome to Bootdev!</h1>

<p>You stack is created successively, you can now go to <a href=\"http://console.drucloud.com\">our home page</a> to <a href=\"http://console.drucloud.com/console/deploy_code.php\">deploy code</a> or <a href=\"http://console.drucloud.com/console/db_deploy.php\">SQL</a> to your Stacks!</p>

<p>&nbsp;</p>",
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

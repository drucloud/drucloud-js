var myApp = angular.module('myApp', ['ngSanitize']);

	function Hello($scope, $log, $http) {
    $scope.node = [];
    var request = $http({
    method: 'PATCH', 
    url: 'http:///localhost/drupal8.14/node/23', 
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
    "title" : {"value":"My Test posting with content4(Updated)"},
    "body": [
        {
            "value": "<p><span dir=\"auto\">Create, read, update and delete</span></p>\r\n\r\n<p>From Wikipedia, the free encyclopedia</p>\r\n\r\n<p>&quot;CRUD&quot; redirects here. For other uses, see&nbsp;<a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Crud_(disambiguation)\" title=\"Crud (disambiguation)\">Crud</a>.</p>\r\n\r\n<p>In&nbsp;<a href=\"http://en.wikipedia.org/wiki/Computer_programming\" title=\"Computer programming\">computer programming</a>,&nbsp;<strong>create, read, update and delete</strong>&nbsp;(as an&nbsp;<a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Acronym_and_initialism\" title=\"Acronym and initialism\">acronym</a>&nbsp;<strong>CRUD</strong>&nbsp;or possibly a&nbsp;<a href=\"http://en.wikipedia.org/wiki/Backronym\" title=\"Backronym\">Backronym</a>) (Sometimes called SCRUD with an &quot;S&quot; for Search) are the four basic functions of&nbsp;<a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Persistent_storage\" title=\"Persistent storage\">persistent storage</a>.<a href=\"http://en.wikipedia.org/wiki/Create,_read,_update_and_delete#cite_note-1\">[1]</a>&nbsp;Sometimes&nbsp;<em>CRUD</em>&nbsp;is expanded with the words<em>retrieve</em>&nbsp;instead of&nbsp;<em>read</em>,&nbsp;<em>modify</em>&nbsp;instead of&nbsp;<em>update</em>, or&nbsp;<em>destroy</em>&nbsp;instead of&nbsp;<em>delete</em>. It is also sometimes used to describe&nbsp;<a href=\"http://en.wikipedia.org/wiki/User_interface\" title=\"User interface\">user interface</a>&nbsp;conventions that facilitate viewing, searching, and changing&nbsp;<a href=\"http://en.wikipedia.org/wiki/Information\" title=\"Information\">information</a>; often using computer-based&nbsp;<a href=\"http://en.wikipedia.org/wiki/Form_(document)\" title=\"Form (document)\">forms</a>&nbsp;and&nbsp;<a href=\"http://en.wikipedia.org/wiki/Report\" title=\"Report\">reports</a>. The term was likely first popularized by&nbsp;<a href=\"http://en.wikipedia.org/wiki/James_Martin_(author)\" title=\"James Martin (author)\">James Martin</a>&nbsp;in his 1983 book&nbsp;<em>Managing the Data-base Environment</em>.<a href=\"http://en.wikipedia.org/wiki/Create,_read,_update_and_delete#cite_note-2\">[2]</a><a href=\"http://en.wikipedia.org/wiki/Create,_read,_update_and_delete#cite_note-3\">[3]</a>&nbsp;The acronym may be extended to&nbsp;<a class=\"new\" href=\"http://en.wikipedia.org/w/index.php?title=CRUDL&amp;action=edit&amp;redlink=1\" title=\"CRUDL (page does not exist)\">CRUDL</a>&nbsp;to cover&nbsp;<em>listing</em>&nbsp;of large data sets which bring additional complexity such as&nbsp;<a href=\"http://en.wikipedia.org/wiki/Pagination\" title=\"Pagination\">pagination</a>&nbsp;when the data sets are too large to hold easily in memory.</p>\r\n\r\n<p>Another variation of CRUD is BREAD, an acronym for &quot;Browse, Read, Edit, Add, Delete&quot;.</p>\r\n",
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

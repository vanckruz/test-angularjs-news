var app = angular.module("jhonnynews",[]);

app.controller("news",function($scope,$http){

	$scope.news = [];

	$scope.getnews = function(){		
		$scope.ancho = "0px";

		$http.get("../../news_mock.json")
		.success(function(data){
			$scope.news = data;
			$scope.ancho = "100%";
		})
		.error(function(){

		});
	}
	
});
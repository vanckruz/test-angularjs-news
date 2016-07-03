var app = angular.module("jhonnynews",[]);

app.controller("news",function($scope,$http){

	$scope.news = [];

	$scope.getnews = function(){		
		$scope.mostrar = false;

		$http.get("../../news_mock.json")
		.success(function(data){
			$scope.news = data;
			$scope.mostrar = true;
			$scope.animacion = "e_ns_animate";

		})
		.error(function(){

		});
	}
	
});
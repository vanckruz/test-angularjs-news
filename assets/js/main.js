var app = angular.module("jhonnynews",[]);

app.controller("news",function($scope,$http){

	$scope.news = [];

	$scope.getnews = function(){		
		$scope.mostrar = false;

		$http.get("../../news_mock.json")
		.success(function(data){
			$scope.news = data;
			$scope.mostrar = true;
			
			$(".e_ns").show("fast");

		})
		.error(function(){

		});
	}

	$scope.detallenew = function(event){
		angular.element(event.target);
		
		$(".detallenew").slideToggle();

		console.log( $(event.target).siblings().attr("class") );
	}
	
});
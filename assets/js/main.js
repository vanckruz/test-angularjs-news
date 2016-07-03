var app = angular.module("jhonnynews",[]);

app.controller("news",function($scope,$http){

	$scope.news = [];

	$scope.getnews = function(){	
		$(".title_general").hide()	

		$scope.mostrar = false;

		$http.get("news_mock.json")
		.success(function(data){
			$scope.news = data;
			$scope.mostrar = true;						
			$scope.width = {"width" : "100%"};
		})
		.error(function(){

		});
	}

	$scope.detallenew = function(event){
		angular.element(event.target);	

		$(".title_general").hide().show("fast").html($(event.target).siblings(".titlens").text());

		$(event.target).parent().siblings().slideToggle().addClass("active");

		$(".detallenew").not(".active").slideUp();

		$(event.target).parent().siblings().removeClass("active");

	}
	
});
var Neo4j = angular.module('neo4j', []);

Neo4j.controller('neo4jCtrl', function($scope, $http){
	
	$scope.getNodeById = function(nodeId){
		console.log(nodeId);


		$http({
		    method: 'POST',
		    url: '/neo4j/getNodeById',
		    data: {'nodeId' : nodeId}
		}).success(function (response) {
			console.log(response);
			$scope.node_details = JSON.stringify(response)

		}).error(function(response){
			console.log(response);
		});

	}


	$scope.getEmpFList = function(Emp_Name){
		console.log(Emp_Name);


		$http({
		    method: 'POST',
		    url: '/neo4j/getEmpFList',
		    data: {'Emp_Name' : Emp_Name}
		}).success(function (response) {
			console.log(response);
			$scope.EmpFList = response.data

		}).error(function(response){
			console.log(response);
		});

	}

	$scope.getGraphJson = function(){

		$http({
		    method: 'POST',
		    url: '/neo4j/getGraphJson'
		}).success(function (response) {
			console.log("success")



			$scope.out = response.data;

			//console.log(response);

		}).error(function(response){
			console.log("error");

			//console.log(response);
		});
	}



});
const app=angular.module("myApp",[])
app.controller("myctrl",function($scope,$http){
	$scope.user={};
	$scope.studentdata=[]; 

     $scope.postdata=function(val){
     	$http({
     		method:"post",
     		url:"/posting",
     		data:val,

     	}).then(function(success){
     		console.log(success)
     	},function(error){
     		console.log(error)
     	})
     	$scope.user=""

     }
     $scope.getdata=function(){
		$http({
			method:"get",
			url:'/getstudentdata'

		}).then(function(success){
			//console.log(success)
			$scope.studentdata=success.data 
		},function(error){
			console.log(error)
		}
		)
	
	}
})
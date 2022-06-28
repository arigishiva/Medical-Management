const app=angular.module("myApp",[])
app.controller("myctrl",function($scope,$http){
	$scope.reguser={};

     $scope.regpostdata=function(val){
     	$http({
     		method:"post",
     		url:"/regposting",
     		data:val,

     	}).then(function(success){
     		console.log(success)
     	},function(error){
     		console.log(error)
     	})
     	$scope.user=""

     }
     $scope.log = {}
    $scope.logdata = function (val) {
        $http({
            method:"post",
            url:"/checkdata",
            data: val
        }).then(function (success) {
            console.log(success);

            if(success.data==''){
                alert("Please reister and then log in");
            }
            else{
                if(success.data.role=="admin")
                location.href("/maincontent")
            else{
                location.href("/register")
            }
        }
        },function (error) {
            console.log(error)
        })
        
    }
})
 

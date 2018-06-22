var app = angular.module("AppData",[]);
app.controller("MyController1",MyController1);

function MyController1($scope,$rootScope){
    $scope.OnClick = function($event){
        $scope.$broadcast("SendDown", "some data");
    }

    $scope.$on("SendDown",function (evt, data){
        $scope.Message = "Inside SendDown handler of MyController1 : " + data;  
    });

    $scope.$on("SendUp",function (evt, data){
        $scope.Message = "Inside SendUp handler of MyController1 : " + data;  
    });
}

app.controller("MyController2",MyController2);

function MyController2($scope,$rootScope){
    $scope.$on("SendDown",function (evt, data){
        $scope.Message = "Inside SendDown handler of MyController2 : " + data;  
    });

    $scope.$on("SendUp",function (evt, data){
        $scope.Message = "Inside SendUp handler of MyController2 : " + data;  
    });
}


app.controller("MyController3",MyController3);

function MyController3($scope,$rootScope){
    $scope.OnClick = function($event){
        $scope.$emit("SendUp", "some data");
    }

    $scope.$on("SendUp",function (evt, data){
        $scope.Message = "Inside Sendup handler of MyController3 : " + data;  
    });

    $scope.$on("SendDown",function (evt, data){
        $scope.Message = "Inside SendDown handler of MyController3 : " + data;  
    });
}
"use strict"
eventApp.controller("TimeoutController",
    function TimeoutController($scope, $timeout) {

    var promise = $timeout(function(){
        $scope.name= "John doe";
    },3000);

    $scope.cancel= function(){
        $timeout.cancel(promise);
    };
    }
);
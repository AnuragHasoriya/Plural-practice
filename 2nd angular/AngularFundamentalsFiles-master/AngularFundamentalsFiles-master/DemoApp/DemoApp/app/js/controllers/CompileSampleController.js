"use strict"

var eventApp = angular.module("eventsApp",[]); 
eventApp.controller("CompileSampleController",
    function CompileSampleController($scope, $compile) {

        $scope.appendDivToElement = function (markup) {
            return $compile(markup) ($scope).appendTo(angular.element("#appendHere")) ;
        }
    }
);
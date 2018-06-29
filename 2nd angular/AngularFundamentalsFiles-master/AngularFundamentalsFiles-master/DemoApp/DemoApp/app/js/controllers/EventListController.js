"use strict";

eventApp.controller("EventListController", EventListController);
    function EventListController($scope, $location, eventData){
        $scope.events = eventData.getAllEvents();
    };
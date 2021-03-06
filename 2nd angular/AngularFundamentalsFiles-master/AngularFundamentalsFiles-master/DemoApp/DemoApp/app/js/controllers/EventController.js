"use strict";
eventApp.controller("EventController",
    function EventController($scope, $anchorScroll, eventData) {
        $scope.sortorder= "name";

        eventData.getEvent()
            .$promise
            .then(function(event) { $scope.event= event; console.log(event);})
            .catch(function(response) { console.log(response);}
        );

        $scope.upVoteSession= function(session) {
            session.upVoteCount ++;
        };
        $scope.downVoteSession= function(session) {
            session.upVoteCount --;
        };

        $scope.scrollToSession= function(){
            $anchorScroll();
        };      
    }
); 
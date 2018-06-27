"use strict"
eventApp.controller("EditEventController",
    function EditEventController($scope, eventData) {
        $scope.saveEvent= function(event, newEventForm){
            if(newEventForm.$valid){
            eventData.save(event)
            .$promise
            .then(function(response){ console.log("Success", response);})
            .catch(function(response){ console.log("Failure", response);});
            }
        };

        $scope.cancelEvent= function(event){
            window.location= "/EventDetails.html";
        }   
    }
);
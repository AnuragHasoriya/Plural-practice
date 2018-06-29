'use strict';   

var eventApp = angular.module('eventsApp',["ngResource", "ui.router"]);

eventApp.config(["$stateProvider", "$urlRouterProvider", configRoutes]);

    function configRoutes ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("newEvent", {
                url: "/newEvent",
                templateUrl: "Templates/NewEventTemplate.html",
                controller: "EditEventController"
            });
        $stateProvider
            .state("eventList", {
                url: "/EventList",
                templateUrl: "Templates/EventListTemplate.html",
                controller: "EventListController"
            });
        $urlRouterProvider.otherwise("/");
};

eventApp.run([ "$state", function ($state) { 

}]);

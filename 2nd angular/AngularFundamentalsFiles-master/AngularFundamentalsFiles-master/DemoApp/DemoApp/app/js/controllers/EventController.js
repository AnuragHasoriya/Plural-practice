"use strict";
eventApp.controller("EventController",
    function ($scope) {
        $scope.sortorder= "name";
        $scope.event= {
            name: "Angular Boot Camp",
            date:  1530007291477,
            time: "16:30",
            location: {
                address: "Sept of baelor,",
                city: "Kings Landing,",
                province: "Westros."
            },
            imageUrl: "img/angularjs-logo.png",
            sessions: [
                {
                    name: "Directive Masterclass",
                    creatorName: "John Snow",
                    duration: 4,
                    level: "Advanced",
                    abstract: "Learn about directive",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and Profit",
                    creatorName: "Brandon Stark",
                    duration: 1,
                    level: "Intermediate",
                    abstract: "learn about scopes",
                    upVoteCount: 0
                },
                {
                    name: "Well Behaved Controllers",
                    creatorName: "Jamie Lannister",
                    duration: 2,
                    level: "Introductory",
                    abstract: "learn about Controllers",
                    upVoteCount: 0
                }
            ]
        }
        $scope.upVoteSession= function(session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession= function(session) {
            session.upVoteCount--;
        }
    }
);
"use script"
eventApp.controller("CookieSampleController", 
    function CookieSampleController($scope, $cookieStore){
        $scope.event = {id:1, name:"my Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put("event", event);
        } ;

        $scope.getEventToCookie = function(){
            console.log($cookieStore.get("event"));
        };

        $scope.removeEventToCookie = function(){
            $cookieStore.remove("event");
        };
    }
)
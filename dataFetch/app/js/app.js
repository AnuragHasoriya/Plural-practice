var app = angular.module("GitData",[])
app.controller("Settings",Settings);
    Settings.$inject = ["$scope", "$interval", "$log", "$anchorScroll", "$location", "github"]; 
     function Settings($scope, $interval, $log, $anchorScroll, $location, github){ //injecting services 

    var onUserLoad = function(data){
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError); //calling a user-service "gitHub"
    };

    function onRepos(data){
        $scope.repos = data;
        $location.hash("userDetails");
        $anchorScroll();
    }

    var onError = function(){
        $scope.error = "could not fetch";
    }

    var decramentCount = function(){
        $scope.countdown -=1;
        if($scope.countdown < 1){
            $scope.search($scope.username);
        }
    }

    var countdownInterval = null;
    var startCountDown = function(){
        countdownInterval = $interval(decramentCount, 1000, $scope.countdown);
    }

   $scope.search = function(username){
        $log.info("Searching for " + username );
        github.getUser(username)
            .then(onUserLoad,onError);
        if(countdownInterval){
            $interval.cancel(countdownInterval);
            $scope.countdown = null
        } 
   }

    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
    $scope.countdown = 5;
    startCountDown();

}

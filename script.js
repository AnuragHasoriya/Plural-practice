var app = angular.module("GitData",[])
app.controller("Settings",Settings);
    Settings.$inject = ["$scope","$http","$interval"];
     function Settings($scope,$http,$interval){

    var onUserLoad = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    function onRepos(response){
        $scope.repos = response.data;
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

    var startCountDown = function(){
        $interval(decramentCount, 1000, $scope.countdown);
    }

   $scope.search = function(username){
    $http.get("https://api.github.com/users/"+ username)
    .then(onUserLoad,onError); 
   }

    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
    $scope.countdown = 5;
    startCountDown();

}

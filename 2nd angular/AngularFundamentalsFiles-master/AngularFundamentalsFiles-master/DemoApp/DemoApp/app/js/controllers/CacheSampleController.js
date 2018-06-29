"use strict"

eventApp.controller("CacheSampleController", ['$scope', 'myCache', function CacheSampleController($scope, myCache) {   
        var ref = myCache.myCache(); 
        $scope.addToCache = function(key, value) {
            ref.put(key, value);
        };
        $scope.readFromCache = function(key) {
            return ref.get(key);
        };
        $scope.getCacheStatus = function() {
            return ref.info();
        }
    }
]);

// eventApp.controller("CacheSampleController", 
// function ( $scope, myCache ){
//     $scope.addToCache = function(key, value) {
//         myCache.put(key, value);
//     }; 

//     $scope.readFromCache = function(key) {
//         return myCache.get(key);
//     };

//     $scope.getCacheStatus = function() {
//         return myCache.info();
//     }  
// });
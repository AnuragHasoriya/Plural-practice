"use strict"

// eventApp.factory= ("myCache", function ($cacheFactory) {
//     return $cacheFactory("myCache", {capcacity:3}); 
// }) ;



eventApp.factory("myCache", ["$cacheFactory", function($cacheFactory) {
    return {
        myCache
    }
    function myCache () {
        return $cacheFactory("myCache", {capacity: 3});
    };
}]);
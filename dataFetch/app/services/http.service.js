(function(){
    var module = angular.module("GitData");
    module.factory("github", github)
    github.$inject = ['$http'];
    function github ($http){
        function getUser(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
            });
        };
            
        function getRepos(user){
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
            });
        };

        return{
            getUser: getUser,
            getRepos: getRepos
        };
    };  
})(); 
angular.module('shortly.links', [])

.controller('LinksController', function ($rootScope, $scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinkData()
      .then(function(link){
        console.log("link", link);
        $scope.data.links = link;
      }, function errorCallback(error){
        console.log(error);
      });
  };
  $scope.getLinks();
  $rootScope.isLoggedIn = true;
});

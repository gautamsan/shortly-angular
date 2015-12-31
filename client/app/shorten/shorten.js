angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
/*  $scope.returnedUrl = {};*/
  $scope.addLink = function() {
    Links.addLinkData($scope.link)
      .then(function(res) {
        console.log(res)
/*        angular.extend($scope.returnedUrl, res);
        console.log($scope.returnedUrl);*/
        $location.path('/links');
      });
  };
});

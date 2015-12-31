angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  //$scope.invalidLink = true;
  $scope.addLink = function() {
    Links.addLinkData($scope.link)
      .then(function(res) {
        $location.path('/links');
      });
  };

/*  $scope.checkValid = function() {
    if($scope.link.url) {
      if($scope.link.url.match(/(http:\/\/www.)/)) {
        $scope.invalidLink = false;
      }
    }
  };*/
});                                            
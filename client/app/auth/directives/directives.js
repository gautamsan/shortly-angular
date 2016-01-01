angular.module('shortly.displayLinks', [])

.directive('displayLink', function(){
  return {
    restrict: "EA",
    templateUrl: "app/links/linkTemplate.html",
    scope: {
      linkdata: "="
    },
    link: function(scope, elem, attrs) {
      console.log(scope)
    }
  };
});
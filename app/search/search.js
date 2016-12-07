angular.module('app.search', [])
.controller('SearchController', function($scope, $http, recipeFactory) {

  $scope.findRecipes = function() {
    recipeFactory.findRecipes($scope.inputFood)
    .then(function(recipes) {
      $scope.recipes = recipes;
    });
  }

  $scope.saveLater = function(context) {
    console.log('clicked on', context);
    var recipe = {
      title: context.recipe.title,
      f2f_url: context.recipe.f2f_url,
      image_url: context.recipe.image_url,
    }
    recipeFactory.saveLater(recipe);
  }

  $scope.test = function(context) {
    console.log(context);
    console.log(context.$parent.show);
    $scope.show = !$scope.show;
  }

  // Fill with live data when no data has been searched for
  // MUST BE AFTER FUNCTIONS - not hoisting to the top
  if (!$scope.recipes) {
    $scope.findRecipes();
  }

});

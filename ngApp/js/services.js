var app;
(function (app) {
    var Services;
    (function (Services) {
        var RecipeService = (function () {
            function RecipeService($resource, $state) {
                this.$state = $state;
                this.RecipeResource = $resource('api/recipe');
            }
            RecipeService.prototype.getRecipe = function (getInfo) {
                console.log(getInfo);
                return this.RecipeResource.save(getInfo).$promise;
            };
            return RecipeService;
        }());
        Services.RecipeService = RecipeService;
        angular.module('app').service('recipeService', RecipeService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FpQlo7QUFqQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBaUJyQjtJQWpCYSxXQUFBLFFBQVE7UUFDckI7WUFNRSx1QkFDRSxTQUFzQyxFQUMvQixNQUEwQjtnQkFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7Z0JBRWpDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFUTSxpQ0FBUyxHQUFoQixVQUFpQixPQUFPO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFBO1lBQ25ELENBQUM7WUFPSCxvQkFBQztRQUFELENBQUMsQUFaRCxJQVlDO1FBWlksc0JBQWEsZ0JBWXpCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFFOUQsQ0FBQyxFQWpCYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFpQnJCO0FBQUQsQ0FBQyxFQWpCUyxHQUFHLEtBQUgsR0FBRyxRQWlCWiJ9
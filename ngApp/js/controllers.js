var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(recipeService, $location, $window) {
                this.recipeService = recipeService;
                this.$location = $location;
                this.$window = $window;
            }
            HomeController.prototype.search = function () {
                var _this = this;
                var info = {
                    recipe: this.recipe,
                };
                console.log(info);
                this.recipeService.getRecipe(info).then(function (res) {
                    if (res.message === 'recipe not found') {
                        alert(res.message);
                    }
                    else {
                        _this.recipeData = res;
                    }
                    console.log(res);
                });
            };
            HomeController.prototype.goToRecipe = function (recipe_id) {
                console.log(this.$location.url);
                this.$window.location.href = 'http://food2fork.com/view/' + recipe_id;
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrQ1o7QUFsQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0N4QjtJQWxDYSxXQUFBLFdBQVc7UUFDdkI7WUF3QkUsd0JBQ1UsYUFBeUMsRUFDMUMsU0FBNkIsRUFDN0IsT0FBMEI7Z0JBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUE0QjtnQkFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7Z0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1lBRW5DLENBQUM7WUF6Qk0sK0JBQU0sR0FBYjtnQkFBQSxpQkFjQztnQkFiQyxJQUFJLElBQUksR0FBRztvQkFDVCxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU07aUJBQ25CLENBQUE7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7b0JBQ3hCLENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFbEIsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBRU0sbUNBQVUsR0FBakIsVUFBa0IsU0FBUztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLEdBQUUsU0FBUyxDQUFDO1lBQ3ZFLENBQUM7WUFPSCxxQkFBQztRQUFELENBQUMsQUE5QkQsSUE4QkM7UUE5QlksMEJBQWMsaUJBOEIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQWxDYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFrQ3hCO0FBQUQsQ0FBQyxFQWxDUyxHQUFHLEtBQUgsR0FBRyxRQWtDWiJ9
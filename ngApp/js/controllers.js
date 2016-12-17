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
                        alert('recipe not found');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FpQ1o7QUFqQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBaUN4QjtJQWpDYSxXQUFBLFdBQVc7UUFDdkI7WUF1QkUsd0JBQ1UsYUFBeUMsRUFDMUMsU0FBNkIsRUFDN0IsT0FBMEI7Z0JBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUE0QjtnQkFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7Z0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1lBRW5DLENBQUM7WUF4Qk0sK0JBQU0sR0FBYjtnQkFBQSxpQkFhQztnQkFaQyxJQUFJLElBQUksR0FBRztvQkFDVCxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU07aUJBQ25CLENBQUE7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO29CQUMzQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO29CQUN4QixDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUVNLG1DQUFVLEdBQWpCLFVBQWtCLFNBQVM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLDRCQUE0QixHQUFFLFNBQVMsQ0FBQztZQUN2RSxDQUFDO1lBT0gscUJBQUM7UUFBRCxDQUFDLEFBN0JELElBNkJDO1FBN0JZLDBCQUFjLGlCQTZCMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFqQ2EsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBaUN4QjtBQUFELENBQUMsRUFqQ1MsR0FBRyxLQUFILEdBQUcsUUFpQ1oifQ==
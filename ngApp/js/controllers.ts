namespace app.Controllers {
  export class HomeController {
    public recipe;
    public location;
    public search(){
      let info = {
        recipe:this.recipe,
        location:this.location
      }
      console.log(info)
      this.recipeService.getRecipe(info).then(() => {
        })
    }
    constructor(
      private recipeService: app.Services.RecipeService
    ) {
    }





  }

  angular.module('app').controller('HomeController', HomeController);
}

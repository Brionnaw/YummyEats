namespace app.Controllers {
  export class HomeController {
    public recipe;
    public location;
    public recipeData;
    public search(){
      let info = {
        recipe:this.recipe,
      }
      console.log(info)
      this.recipeService.getRecipe(info).then((res) => {
        if (res.message === 'recipe not found') {
          alert(res.message)
        } else {
          this.recipeData = res;
        }
        console.log(res)
      })
    }
    constructor(
      private recipeService: app.Services.RecipeService
    ) {
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}

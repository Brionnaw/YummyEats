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
    //webpage click //change to external href
    public goToRecipe(recipe_id) {
      console.log(this.$location.url)
      this.$window.location.href = 'http://food2fork.com/view/'+ recipe_id;
    }
    constructor(
      private recipeService: app.Services.RecipeService,
      public $location:ng.ILocationService,
      public $window: ng.IWindowService,
    ) {
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}

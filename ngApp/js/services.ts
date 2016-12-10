namespace app.Services {
 export class RecipeService {
   public RecipeResource;
   public getRecipe(getInfo) {

     console.log(getInfo)
     return this.RecipeResource.save(getInfo).$promise
   }
   constructor(
     $resource:ng.resource.IResourceService,
     public $state:ng.ui.IStateService
   ){
     this.RecipeResource = $resource('api/recipe');

   }
 }

 angular.module('app').service('recipeService', RecipeService)

}

namespace app.Controllers {
  export class HomeController {
    public recipe;
    public search(){
      let info = {
        recipe:this.recipe
      }
      console.log(info)
    }
    constructor() {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}

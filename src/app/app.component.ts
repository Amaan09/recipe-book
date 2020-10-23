import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe = true;
  showShopping = false;
  
  onNavigation(status: {recipeStatus: boolean, shoppingStatus: boolean}) {
    this.showRecipe = status.recipeStatus;
    this.showShopping = status.shoppingStatus;
  }
}

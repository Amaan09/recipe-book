import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    ingredient: Ingredient;

    private recipes: Recipe[] = [
        new Recipe(
            'Burger with Fries',
            'This is a tasty Burger with good fries', 
            'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
            [
                new Ingredient('Mutton', 1),
                new Ingredient('Fries', 25)
            ]   
        ),
        
        new Recipe(
            'BBQ Pizza', 
            'This is a deliocious Pizza from Italy', 
            'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Oregano', 5)
            ]
        )
    ]

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    sendIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
    }
}
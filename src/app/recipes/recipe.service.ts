import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty schnitzel - just awesome!',
            'https://poms-feinkost.de/store/413-medium_default/knusper-schnitzel-gebraten-10-stuck-je-ca-180g.jpg', 
            [ 
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?',
            'http://ownchef.files.wordpress.com/2011/12/big-king-xxl1.jpg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ])
      ];   

      constructor(private slService: ShoppingListService) {}
      
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
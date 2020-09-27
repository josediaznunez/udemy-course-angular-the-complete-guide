import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tacos al Pastor',
      'These tacos are sure to impress your family and friends. A good Taco al Pastor is very hard to come by in the States. '
      + 'Now you can enjoy them in the comfort of your own home anytime!',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5315431.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85',
      [
        new Ingredient('dried pasilla chiles, seeded and torn to pieces', 8),
        new Ingredient('dried guajillo chiles, seeded and torn to pieces', 8),
        new Ingredient('cloves garlic, chopped', 8),
        new Ingredient('teaspoon achiote powder', 1),
        new Ingredient('teaspoon ground cumin', .5),
        new Ingredient('whole cloves', 5),
        new Ingredient('cup white vinegar', 1),
        new Ingredient('to taste', .5),
        new Ingredient('pounds pork tenderloin, thinly sliced', 2),
        new Ingredient('cup chopped pineapple', .5),
        new Ingredient('(5 inch) corn tortillas', 32),
        new Ingredient('small onion, chopped', 1),
        new Ingredient('cup chopped fresh cilantro', .5),
        new Ingredient('limes, cut in wedges', 4)
      ]
    ),
    new Recipe(
      'Blue Cheese Burger',
      '"Hamburgers? Yes. But basic fare? Definitely not! What a treat they are, and the wise cook will make up a dozen or so for '
      + 'the freezer. If you like blue cheese, you\'ll never forget these burgers."',
      'https://images.media-allrecipes.com/userphotos/720x405/2467375.jpg',
      [
        new Ingredient('pounds lean ground beef', 3),
        new Ingredient('ounces blue cheese, crumbled', 4),
        new Ingredient('cup minced fresh chives', .5),
        new Ingredient('teaspoon hot pepper sauce', .25),
        new Ingredient('teaspoon Worcestershire sauce', 1),
        new Ingredient('teaspoon coarsely ground black pepper', 1),
        new Ingredient('teaspoons salt', 1.5),
        new Ingredient('teaspoon dry mustard', 1),
        new Ingredient('French rolls or hamburger buns', 12)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    // slice() returns new array/copy
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}

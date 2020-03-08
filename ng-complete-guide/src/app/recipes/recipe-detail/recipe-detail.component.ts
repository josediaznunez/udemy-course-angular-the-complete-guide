import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  isManageRecipeClicked = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onToShoppingList(recipe: Recipe) {
    for (const ingredient of recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}

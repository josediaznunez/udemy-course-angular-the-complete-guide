import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {UrlSerializer} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  private selectedRecipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeClicked(recipeClicked: Recipe) {
    this.selectedRecipe = recipeClicked;
  }
}

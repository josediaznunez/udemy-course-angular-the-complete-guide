import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() { }

  onRecipeClicked(recipeClicked: Recipe) {
    this.selectedRecipe = recipeClicked;
  }
}

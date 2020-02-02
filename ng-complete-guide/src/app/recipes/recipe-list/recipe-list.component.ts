import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe - 1', 'This is simply a test - 1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A Test Recipe - 2', 'This is simply a test - 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe - 3', 'This is simply a test - 3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output()
  private recipeClickedEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() { }

  onRecipeClicked(recipeEl: Recipe) {
    this.recipeClickedEvent.emit(recipeEl);
  }
}

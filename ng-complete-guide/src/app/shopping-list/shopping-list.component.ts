import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredientAdded: Ingredient) {
    this.ingredients.push(ingredientAdded);
  }

}

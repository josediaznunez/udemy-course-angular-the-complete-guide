import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, AfterContentChecked {

  ingredients = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngAfterContentChecked() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}

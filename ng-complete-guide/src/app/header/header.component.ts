import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;

  @Output()
  currentView = new EventEmitter<string>();

  onRecipesClicked() {
    this.currentView.emit('recipes');
  }

  onShoppingListClicked() {
    this.currentView.emit('shopping-list');
  }
}

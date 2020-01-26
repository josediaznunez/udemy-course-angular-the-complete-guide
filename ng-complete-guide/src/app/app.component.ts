import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentView: string;

  currentViewListener(currentView: string) {
    this.currentView = currentView;
  }
}

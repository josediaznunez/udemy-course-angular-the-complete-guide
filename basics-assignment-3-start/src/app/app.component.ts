import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayDetails = false;
  isDisplayDetailsTimestamps = [];

  onDisplayDetailsToggleValue($event: MouseEvent) {
    this.isDisplayDetails = !this.isDisplayDetails;
    this.isDisplayDetailsTimestamps.push($event.timeStamp);
  }

  getColor(i: number) {
    return (i > 3 ? 'blue' : 'white');
  }
}

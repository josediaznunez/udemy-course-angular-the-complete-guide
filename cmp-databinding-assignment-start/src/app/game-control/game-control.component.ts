import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private counter = 0;

  @Output()
  incrementingNumberEvent = new EventEmitter<{ value: number }>();

  private setIntervalRef: number;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.setIntervalRef = setInterval(
      () => {
        this.incrementingNumberEvent.emit(
          {
            value: this.counter++
          }
        );
      }, 1000);
  }

  onEndGame() {
    clearInterval(this.setIntervalRef);
  }
}

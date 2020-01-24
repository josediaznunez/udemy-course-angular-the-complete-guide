import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private counter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    setInterval(
      () => {
        this.increment();
      }, 1000);
  }

  increment() {
    console.log(this.counter++);
  }

}

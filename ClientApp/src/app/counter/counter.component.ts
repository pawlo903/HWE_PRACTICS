import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public nextCount = 1;


  public incrementCounter() {
    this.currentCount = this.currentCount + this.nextCount;
    this.nextCount = this.currentCount - this.nextCount;
  }
}

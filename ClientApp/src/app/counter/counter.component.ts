import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public prevCount = 0;
  public currentCount = 0;
  public previousCount = 1;


  public incrementCounter() {
    this.currentCount = this.previousCount + this.prevCount;
    this.prevCount = this.previousCount;
    this.previousCount = this.currentCount;
  }
}

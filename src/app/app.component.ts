import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public counter = 0;

  /**
   * IncrementCounter
   */
  public incrementCounter() {
    this.counter++;
  }

  /**
   * DecrementCounter
   */
  public decrementCounter() {
    this.counter--;
  }
}

import { Component } from "@angular/core";

@Component({
    selector:'counter',
    templateUrl:'./counter.component.html'
})
export class CounterComponent {
  title: string = 'Contador App';
  counter: number = 10;
  
  base: number = 5;


  operate( value:number ): void {
    this.counter += value;
  }
}
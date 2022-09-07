import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  constructor() { }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeroe: string = '';

  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.pop() || '';
  }
  

}

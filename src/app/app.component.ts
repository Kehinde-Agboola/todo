import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Complete online Javascript course', done: true },
    { description: 'Jug around the Pack 3x', done: false },
    { description: '10minutes meditation', done: false },
    { description: 'Jug around the Pack 3x', done: false },
    { description: '10minutes meditation', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
    console.log(description);
  }
}

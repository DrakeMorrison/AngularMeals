import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMeals';
  viewToShow = 'recipe';

  updateView(viewName: string) {
    this.viewToShow = viewName;
  }
}

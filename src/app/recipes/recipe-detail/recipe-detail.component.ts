import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe = new Recipe('More Testing Recipes', 'Here is another one', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg');

  constructor() { }

  ngOnInit() {
  }

}

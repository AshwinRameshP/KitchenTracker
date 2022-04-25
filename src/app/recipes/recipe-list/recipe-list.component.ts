import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes: Recipe[] = [
  new Recipe('A test 1 recipe','This is a simple test', 'http://picsum.photos/200'),
  new Recipe('A test 2 recipe','This is a simple test', 'http://picsum.photos/200'),
  new Recipe('A test 3 recipe','This is a simple test', 'http://picsum.photos/200')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

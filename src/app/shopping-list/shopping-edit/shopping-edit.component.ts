import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  @Output() currIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredients() {
    this.currIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    })
  }

}

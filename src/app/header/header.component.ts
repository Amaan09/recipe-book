import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() status = new EventEmitter<{recipeStatus: boolean, shoppingStatus: boolean}>();
    onShowRecipes() {
        this.status.emit({
            recipeStatus: true,
            shoppingStatus: false
        });
    }

    onShowShopping() {
        this.status.emit({
            recipeStatus: false,
            shoppingStatus: true
        });
    }
}
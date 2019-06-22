import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'item-card',
    templateUrl: './item-card.html'
})
export class ItemCard {
    @Input() item;
}
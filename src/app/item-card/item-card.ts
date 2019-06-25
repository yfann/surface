import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {DataServiceProvider}from '../services/data-service'
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
    selector: 'item-card',
    templateUrl: './item-card.html',
    styleUrls: ['./item-card.scss']
})
export class ItemCard {
    @Input() item;
    @Output() rate = new EventEmitter<string>();
    @Output() invisible = new EventEmitter<string>();
    @ViewChild('rateelement',{static: false})
    ratele;
    hoved=false;
    hide=false;

    constructor(private service: DataServiceProvider) {
    }

    rating():void{
        this.send();
    }

    hover():void{
        this.hoved=true;
    }

    send():void{
        if(this.hoved){
            this.rate.emit(this.item);
            this.hoved=false;
        }
    }

    close():void{
        this.hide=true;
        this.invisible.emit(this.item);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Productos[] = [];
    constructor() { }

    addToCart(Productos: Productos) {
        this.items.push(Productos);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    /* . . . */
}

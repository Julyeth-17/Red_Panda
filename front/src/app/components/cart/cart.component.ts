import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Productos } from "../../models/productos";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _productos: ProductosService) {}

  carritoProductos:Productos[] = []
  items = this._productos.getProductos();
 

  getProducto(): void {
    console.log("aqui vamos");
    console.log(this.items);
    /*
    this._productos.getProducto().subscribe((data: any) => {
      this.carritoProductos = data.data;
      // this.cartDetails = data.data;
      console.log(this.carritoProductos);
    });
    */
  }

  /*

  _increamentQTY(): void {
    const payload = {};
    this._productos.increaseQty(payload).subscribe(() => {
      this.getProducto();
      alert('Product Added');
    });
  }
  deleteProducto(): void {
    this._productos.deleteProducto().subscribe(() => {
      this.getProducto();
      alert('Cart Emptied');
    });
  }
  */
  ngOnInit(): void {
    this.getProducto();
    console.log("hola");
  }

}

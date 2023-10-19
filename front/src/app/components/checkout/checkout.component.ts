import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Productos } from "../../models/productos";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit{


      item! : Productos;

      constructor(private _productosService: ProductosService) {}

      ngOnInit(): void {

        this._productosService.getProducto("6529fb99e57047c044f87f96")
          .subscribe((data:any) => {
            this.item = data;
            console.log(data);
            // localStorage.setItem('')
          });
}
}



//

//     constructor(private _productos: ProductosService) {}

//     ngOnInit(): void {
//         this.getProducto(identificador:string)
//     }

//     // getProducto(){
//     // this._productos.getProducto().subscribe((data:any)=> {
//     //   this.item=data
//     // })
// getProducto(identificador:string){
//   this._productos.getProducto(identificador).subscribe(
//     data =>{
//     this.item= data.data
//     console.log(this.item)
//   })
// }

//     }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from "src/app/models/productos";
import { ProductosService } from "src/app/services/productos.service";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-registro-productos',
    templateUrl: './registro-productos.component.html',
    styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit {

    ingresoProducto: FormGroup
    vBooleano: boolean = false;
    valores: boolean[] = [];

    regexAlfabetico = /^[A-Za-z, ]+$/;
    regexNumero = /^[0-9]+$/;
    regexUrl = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)+$/;
    id: string | null;
    tituloPagina: string = 'Ingresa El Producto';
    txtBoton: string = 'ENVIAR';

    atras: any = null
    siguiente: any = null

    @ViewChild('formProducto') formProducto!: any

    constructor(private fb: FormBuilder, private _productoService: ProductosService, private router: Router, private idProducto: ActivatedRoute) {
        this.ingresoProducto = this.fb.group({
            nombre: ['', [Validators.required]],
            imagen: ['', [Validators.required, Validators.pattern(this.regexUrl)]],
            descripcion: ['', [Validators.required]],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            disponible: ['', [Validators.required]],
            unidades: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
        })

        this.id = this.idProducto.snapshot.paramMap.get('id')
    }

    listaProductos: Productos[] = [];

    obtenerProducto() {
        this._productoService.getProductos().subscribe(data => {
            this.listaProductos = data
            console.log(data)
            console.log(this.listaProductos)
        }, error => {
            console.log('error')
        })
    }

    // next() {
    //     this.pagina = this.pagina + 1;
    //     this.obtenerPersonajes()

    //     console.log(this.pagina);
    // }

    // back() {
    //     this.pagina = this.pagina - 1;
    //     this.obtenerPersonajes()
    //     console.log(this.pagina);
    // }

    enviarFormulario() {
        let formularioData: Productos = this.ingresoProducto.value

        if (!this.id) {
            console.log("holis")
            this._productoService.postProducto(formularioData).subscribe(data => {
                Swal.fire({
                    title: 'El producto ha sido guardado',
                    icon: 'success',
                    timer: 1500
                })
                this.router.navigate(['/admin-products']);
                this.obtenerProducto()
            })
        }
        console.log(this.id)
        this._productoService.putProducto(this.id, this.ingresoProducto.value).subscribe(data => {
            Swal.fire({
                title: 'Producto Actualizado',
                icon: 'success',
                timer: 1500
            })
            this.router.navigate(['/admin-products'])
        })
    }

    eliminarProducto(id: any) {
        Swal.fire({
            title: '¿Segura?',
            text: 'Esta acción no se puede deshacer',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borre esa mondá',
        }).then((result) => {
            if (result.isConfirmed) {
                this._productoService.deleteProducto(id).subscribe(data => {
                    Swal.fire({
                        title: 'Su producto ha sido eliminado',
                        timer: 2000
                    })
                    this.obtenerProducto();
                }, error => {
                })
            }
        })
    }

    ngOnInit(): void {
        this.accionSolicitada()
        this.obtenerProducto()
    }

    accionSolicitada() {
        if (this.id != null) {
            this.tituloPagina = 'Actualizar Producto'
            this.txtBoton = 'Guardar Cambios'
            this._productoService.getProducto(this.id).subscribe(res => {
                this.ingresoProducto.setValue({
                    nombre: res.nombre,
                    imagen: res.imagen,
                    descripcion: res.descripcion,
                    precio: res.precio,
                    disponible: res.disponible,
                    unidades: res.unidades
                })
            }, error => {
                console.log(error)
                this.router.navigate(['/404']);
            });
        }
    }

    // agregarValor(){
    //     this.valores.push(this.vBooleano)
    // }

}

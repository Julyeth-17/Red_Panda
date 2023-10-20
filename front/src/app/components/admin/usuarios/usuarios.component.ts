import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

    listaUsuarios: Usuario[] = []

    constructor(private _usuarioService: UsuarioService){}

    ngOnInit(): void {
        this.traerUsuarios();
    }

    traerUsuarios() {
        this._usuarioService.getUsuarios().subscribe(data => {
            console.log(data)
            this.listaUsuarios = data
        }, error => {
            console.log(error)
        })
    }

    eliminarUsuario(id: any) {
        Swal.fire({
            title: '¿Desea eliminar usuario?',
            text: 'Tenga en cuenta que esta acción no se puede deshacer',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminar el usuario',
        }).then((result) => {
            if (result.isConfirmed) {
                this._usuarioService.deleteUsuario(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario eliminado',
                        timer: 2000
                    })
                    this.traerUsuarios();
                }, error => {
                    console.log(error);

                })
            }
        })
    }

}


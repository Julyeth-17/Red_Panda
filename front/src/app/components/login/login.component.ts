import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    visible: boolean = true;
    changetype: boolean = true;

    userFormLogin = {
        correo: '',
        password: ''
    }

    regexAlfanum = /[a-zA-Z0-9_.]+$/

    constructor(private _usuarioService: UsuarioService, private router: Router) { }

    ingresoUsuario() {

        if (this.userFormLogin.correo != '' && this.userFormLogin.password != '') {
            this._usuarioService.postIngresoUsuario(this.userFormLogin).subscribe(respuestaAPI => {
                sessionStorage.setItem('token', respuestaAPI.token);
                console.log(respuestaAPI);

                this.router.navigate(['/admin-users'])
            }, erro => {
                console.log(erro)
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario y/o contraseña inválidos',
                    iconColor: '#ff0d0d'
                })
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Digite su usuario y contraseña, bestia',
                iconColor: '#ff0d0d'
            })
        }


    }

    verpass() {
        this.visible = !this.visible
        this.changetype = !this.changetype
    }

}

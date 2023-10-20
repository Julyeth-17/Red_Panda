import { Component, HostListener } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [

    ]

})
export class NavbarComponent {

    constructor(public _usuarioService: UsuarioService, private _router: Router){}

    cerrarSesion(){
        sessionStorage.removeItem('token');
        this._router.navigate(['/home']);
    }

}

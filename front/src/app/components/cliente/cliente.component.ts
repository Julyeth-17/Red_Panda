import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPass') alertPass!: ElementRef

    visible: boolean = true;
    changetype: boolean = true;

    formularioRegistroCliente: FormGroup
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    id: string | null;
    tituloPagina: string = 'Crea una cuenta';
    txtBoton: string = 'ENVIAR'

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private _clienteService: ClienteService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.formularioRegistroCliente = this.fb.group({

            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required,]],
            email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            password: ['', [Validators.required, Validators.pattern(this.regexPass), Validators.minLength(8)]],
        })

        console.log(this.formularioRegistroCliente)

        this.id = this.idUsuarioRuta.snapshot.paramMap.get('id')
    }

    ListaUsuarios: Usuario[] = [];

    obtenerUsuarios() {
        this._usuarioService.getUsuarios().subscribe(data => {
            this.ListaUsuarios = data
            console.log('data')
        }, error => {
            console.log('error')
        })
    }

    enviarFormulario() {
        let registroData: Usuario = this.formularioRegistroCliente.value;
        console.log(registroData)

        if (this.id == null) {
            if (this.rectificarPass()) {
                this._usuarioService.postUsuario(registroData).subscribe(data => {
                    console.log(this._usuarioService.postUsuario)
                    Swal.fire({
                        title: '¡Bienvenido!',
                        imageUrl: 'https://i.pinimg.com/originals/12/1d/43/121d43f850081bd9b279b7aff7cbb081.gif',
                        imageWidth: 400,
                        imageHeight: 344,
                        imageAlt: 'Custom image',
                        timer: 1500
                    })
                    this.router.navigate(['/inicio-sesion']);
                })
            }
        } else {
            if (this.rectificarPass()) {
                this._usuarioService.putUsuario(this.id, this.formularioRegistroCliente.value).subscribe(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Actualizado',
                        iconColor: '#2ce30b'
                    })
                    this.router.navigate(['/admin-users'])
                })
            }
        }
    }

    rectificarPass() {
        let passUser = this.formularioRegistroCliente.get('password')?.value;
        if (passUser != this.inputPass2?.nativeElement.value) {
            this.alertPass.nativeElement.classList.remove('d-none')
            return false
        } else {
            this.alertPass.nativeElement.classList.add('d-none')
            return true
        }
    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    accionSolicitada() {
        if (this.id != null) {
            this.tituloPagina = 'Actualizar Usuario'
            this.txtBoton = 'Guardar Cambios'
            this._usuarioService.getUsuario(this.id).subscribe(res => {
                console.log(this._usuarioService.getUsuario)
                this.formularioRegistroCliente.setValue({
                    nombre: res.nombre,
                    apellido: res.apellido,
                    email: res.email,
                    password: '',
                })
            }, error => {
                this.router.navigate(['/404']);
            });
        }
    }
}

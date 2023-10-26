import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPass') alertPass!: ElementRef

    visible: boolean = true;
    changetype: boolean = true;

    formularioRegistro: FormGroup
    regexAlfa = /^[a-zA-Z]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexNumtel = /^3[0-9]{9}/
    regexNum = /^[0-9]+$/;
    regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    id: string | null;
    tituloPagina: string = 'Registro';
    txtBoton: string = 'ENVIAR'

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.formularioRegistro = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexNumtel), Validators.maxLength(10)]],
            password: ['', [Validators.required, Validators.pattern(this.regexPass), Validators.minLength(8)]],
            ciudad: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            postal: ['', [Validators.required, Validators.pattern(this.regexNum), Validators.maxLength(6)]],
            newsletter: ['', [Validators.required]],
            condiciones: ['', [Validators.required]]
        })

        this.id = this.idUsuarioRuta.snapshot.paramMap.get('id')
    }

    listarUsuarios: Usuario[] = [];

    obtenerUsuarios() {
        this._usuarioService.getUsuarios().subscribe(data => {
            this.listarUsuarios = data
            console.log('data')
        }, error => {
            console.log('error')
        })
    }

    verpass() {
        this.visible = !this.visible
        this.changetype = !this.changetype
    }

    enviarFormulario() {
        let registroData: Usuario = this.formularioRegistro.value;
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
                this._usuarioService.putUsuario(this.id, this.formularioRegistro.value).subscribe(res => {
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
        let passUser = this.formularioRegistro.get('password')?.value;
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
                this.formularioRegistro.setValue({
                    nombre: res.nombre,
                    apellido: res.apellido,
                    email: res.email,
                    telefono: res.telefono,
                    password: '',
                    ciudad: res.ciudad,
                    postal: res.postal,
                    newsletter: res.newsletter,
                    condiciones: res.condiciones
                })
            }, error => {
                this.router.navigate(['/404']);
            });
        }
    }
}

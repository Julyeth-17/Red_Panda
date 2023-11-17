import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPass') alertPass!: ElementRef

    visible: boolean = true;
    changetype: boolean = true;

    formularioRegistroCompra: FormGroup
    regexAlfa = /^[a-zA-Z]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexNumtel = /^3[0-9]{9}/
    regexNum = /^[0-9]+$/;
    regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    id: string | null;
    tituloPagina: string = '¡Solo unos datos más!';
    txtBoton: string = 'FINALIZAR COMPRA'

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private _clienteService: ClienteService, private router: Router, private idClienteRuta: ActivatedRoute) {
        this.formularioRegistroCompra = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexNumtel), Validators.maxLength(10)]],
            password: ['', [Validators.required, Validators.pattern(this.regexPass), Validators.minLength(8)]],
            pago: ['', [Validators.required, Validators.pattern(this.regexNum)]],
            ciudad: ['', [Validators.required, Validators.pattern(this.regexAlfa)]],
            postal: ['', [Validators.required, Validators.pattern(this.regexNum), Validators.maxLength(6)]],
            direccion: ['', [Validators.required, Validators.pattern(this.regexAlfa)]]
        })

        this.id = this.idClienteRuta.snapshot.paramMap.get('id')
    }

    verpass() {
        this.visible = !this.visible
        this.changetype = !this.changetype
    }

    enviarFormulario() {
                    Swal.fire({
                        title: '¡Gracias por tu compra!',
                        imageUrl: 'https://i.pinimg.com/originals/12/1d/43/121d43f850081bd9b279b7aff7cbb081.gif',
                        imageWidth: 400,
                        imageHeight: 344,
                        imageAlt: 'Custom image',
                        timer: 1500
                    })
                    this.router.navigate(['/home']);
                }


    rectificarPass() {
        let passUser = this.formularioRegistroCompra.get('password')?.value;
        if (passUser != this.inputPass2?.nativeElement.value) {
            this.alertPass.nativeElement.classList.remove('d-none')
            return false
        } else {
            this.alertPass.nativeElement.classList.add('d-none')
            return true
        }
    }
}

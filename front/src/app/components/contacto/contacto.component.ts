import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm= this.fb.group({
      correo:['', [Validators.required]],
      telefono:['', [Validators.required]],
      instagram:['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  agregarContacto(){
  console.log(this.contactoForm)
  }


mostrarSweetAlert() {
  Swal.fire({
    title: '¡Muchas gracias!',
    text: 'Responderemos a tus inquietudes lo más pronto posible',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}


}

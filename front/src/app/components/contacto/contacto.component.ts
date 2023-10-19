import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

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
}

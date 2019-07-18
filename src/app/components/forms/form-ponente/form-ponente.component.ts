import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ponente',
  templateUrl: './form-ponente.component.html',
  styleUrls: ['./form-ponente.component.scss']
})
export class FormPonenteComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      'dni': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ]),
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[^0-9]*[A-Z]?[a-zñáéíóú]+')
      ]),
      'apellido': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[^0-9]*[A-Z]?[a-zñáéíóú]+')
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'telefono': new FormControl('', [
        Validators.required,
        Validators.pattern('(09)+[0-9]{8}')
      ])
    });
  }

  ngOnInit() {
  }
  
  send() {
    console.log(this.loginForm.value);
  }
}

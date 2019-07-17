import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ponente',
  templateUrl: './form-ponente.component.html',
  styleUrls: ['./form-ponente.component.scss']
})
export class FormPonenteComponent implements OnInit {

  loginForm: FormGroup
  referencias: string[]

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
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
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),

      referencias: this.formBuilder.array([this.formBuilder.group({
        nombreRef: ['', [Validators.required, Validators.pattern('[^0-9]*[A-Z]?[a-zñáéíóú]+')]],
        telefono: ['', [Validators.required, Validators.pattern('(09)+[0-9]{8}')]],
        parentezco: [, [Validators.required, Validators.pattern('[^0-9]*[A-Z]?[a-zñáéíóú]+')]]
      })])
    });


  }

  ngOnInit() {
  }
  send() {
    console.log(this.loginForm.value);
    console.log('referencias' + this.referencias)
  }

  get arrayForm() {
    return this.loginForm.get('referencias') as FormArray;
  }
  addForm() {
    const controltel = <FormArray>this.loginForm.controls['referencias'];
    controltel.push(this.formBuilder.group({ nombreRef: [], telefono: [], parentezco: [] }));
  }
}

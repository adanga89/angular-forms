import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4300i'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080i',
             /*validadores sincronos*/
            [
              Validators.required,
              Validators.minLength(3)
            ],
            /*Validadores Asíncronos*/],
    precio: [ 1500, [Validators.required, Validators.min(0)] ],
    existencias: [ 5 , [Validators.required, Validators.min(0)] ]
  })

  constructor(private fb: FormBuilder){}
}

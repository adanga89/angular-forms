import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
    nombre: ['RTX 4080i'],
    precio: [ 1500 ],
    existencias: [ 5 ]
  })

  constructor(private fb: FormBuilder){}
}

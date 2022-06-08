import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo: string): boolean | undefined{
    return this.miFormulario.get(campo)?.invalid;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}

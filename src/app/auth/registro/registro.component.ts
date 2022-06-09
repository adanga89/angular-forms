import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../shared/validator/validaciones';
import { ValidatorService } from '../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.validService.emailPattern)]],
    username: [ '' , [Validators.required, this.validService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]
  },
  /*Opciones para el formGroup*/
  {
    validators: [ this.validService.camposIguales('password','password2')]
  }
  );

  constructor(private fb: FormBuilder,
              private validService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Adan Garnica',
      email: 'a@te.com',
      username: 'adga'
    })
  }

  campoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  } 

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }
   
}

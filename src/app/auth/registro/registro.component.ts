import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../shared/validator/validaciones';
import { ValidatorService } from '../../shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required'])
      return "Email requerido";
    else if(errors?.['pattern'])    
      return "Formato de email erroneo";
    else    
      return "Email Existente";
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.validService.emailPattern)], [this.emailValidator]],
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
              private validService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

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

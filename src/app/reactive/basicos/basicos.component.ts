import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4300i'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // });

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   precio: 0,
    //   existencias: 0
    // })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',
             /*validadores sincronos*/
            [
              Validators.required,
              Validators.minLength(3)
            ],
            /*Validadores Asíncronos*/],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [  , [Validators.required, Validators.min(0)] ]
  })

  constructor(private fb: FormBuilder){}

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }

    this.miFormulario.reset();
  }
}

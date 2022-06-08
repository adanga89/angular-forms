import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.min(3)]],
    favoritos: this.fb.array([
      ['Metal Gear'], ['Resident Evil 4']
    ], Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  guardar():void{
    if(this.miFormulario.invalid){
      console.log('nvalid')
      this.miFormulario.markAllAsTouched();
      return;
    }
  }

}

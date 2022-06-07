import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  nombre: string = '';

  ngOnInit(): void {
  }

  guardar(){
    console.log("Formulario Posteado");
  }

  nombreValido(){

  }
}

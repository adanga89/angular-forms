import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: "Adan",
    favoritos: [
      {id: 1, nombre: "nose"},
      {id: 1, nombre: "pose"},
    ]
  }
 
  guardar(){
    console.log("Formulario Posteado");
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

}

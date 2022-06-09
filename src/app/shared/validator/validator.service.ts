import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider( args: FormControl): ValidationErrors | null{
      const valor: string = args.value.trim();
      console.log(valor);
      return valor === 'strider' ? {noStrider: true}: null;
  }

  camposIguales(campo1: string, campo2: string){
    
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIgual: true});
        return { noIgual: true } 
      }
      else{
        formGroup.get(campo2)?.setErrors(null);
        return null; 
      }
      
    }

  }
}

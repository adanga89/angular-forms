import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor(private http: HttpClient) { }
  
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
   
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
            .pipe(
              delay(3000),
              map( res => {
                console.log('res:'+res);
                return (res.length === 0) ? null : {emailTomado: true};
              })
            );
  }


}

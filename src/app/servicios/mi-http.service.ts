import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { catchError, retry } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Jugador} from './../clases/jugador';

@Injectable()
export class MiHttpService {
  
 jugadoresURL:string = "darodarioli.tech/API/loginWEB/registro";
 

  constructor(public http:Http) { }

  AgregarJugador(jugador: Jugador) {
    return this.http.post(this.jugadoresURL,jugador);  

    // return this.http.post<Jugador>(this.jugadoresURL, jugador)
    //   .pipe(
    //     catchError(this.handleError(jugador))
    //   );
  }


  public httpGetPromise(url: string, objeto:any){

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }


}

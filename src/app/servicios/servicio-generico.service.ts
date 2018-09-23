import { log } from 'util';
import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'; 

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Jugador } from '../clases/jugador';


@Injectable({
  providedIn: 'root'
})
export class ServicioGenericoService {

  url:string = "http://darodarioli.tech/API/loginWEB/"
  urlLocal:string = "localhost/AngularApi/API/loginWEB/"

  constructor(public http: Http) { }

  public httpGet_Generico(tarea:string, parametro:string)
  {
    return this.http
    .get( this.url + tarea + "?" + parametro)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpGet_Listado(tarea:string)
  {
    return this.http
    .get( this.url + tarea)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpGet_Observable ( url: string): Observable<Jugador>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}

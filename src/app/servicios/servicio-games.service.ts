import { log } from 'util';
import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'; 
import {ServicioGenericoService} from '../servicios/servicio-generico.service';
import { Jugador } from '../clases/jugador';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})
export class ServicioGamesService {


  unJugador:Jugador;

  constructor(public http: Http,private otroHttpService:MiHttpService,private servicioGenerico:ServicioGenericoService) { }

  public httpPostP_Game( url: string, parametro: any )
  {

    if(url =="Logueo")
    {
      console.log("El chabón está queriendo ingresar");
      console.log("Los parámetros son: "+parametro);  

      let respuestaGenerico = this.servicioGenerico.httpGet_Generico("login",parametro)
      console.log(respuestaGenerico.then());

      //let momentaneoBorrar:object;
     // let respuesta = this.otroHttpService.httpPostP("http://darodarioli.tech/API/loginWEB/login?"+parametro,momentaneoBorrar)
     // console.log(respuesta);
   

    }
    else if(url == "Registro")
    {
      console.log("Estoy en registro game")
        let respuestaObservable = this.servicioGenerico.httpGet_Observable(url + parametro)
        console.info(respuestaObservable)
    }
    else
    {
      console.log("No sabemos qué quiere hacer hacer");
    }

  }


}
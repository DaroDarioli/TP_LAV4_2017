import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ServicioGamesService} from '../../servicios/servicio-games.service';

import { MiHttpService } from '../../servicios/mi-http/mi-http.service'; 
import {Jugador} from '../../clases/jugador';
import { JitCompiler } from '@angular/compiler';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/

  unJugador:Jugador;
  usuario:string ='';
  name: string = '';
  psw:string = '';
  constructor(private MiServicioGame:ServicioGamesService,private MiHttpService:MiHttpService ) { }

  ngOnInit() {
  }

  
  //1- Lo paso en el constructor
  //2- lo utilizo como instancia this.http.Agregar(parametro)
  
  RegistrarUsuario() { 
      
    let parametrosRegistro = "mail: " + this.name + " pass jugador: "+this.psw+" Usuario: "+this.usuario;
    let respuesta2 = this.MiServicioGame.httpPostP_Game("Registro",parametrosRegistro);
    console.log(respuesta2)
    
    
    //console.log("mail: " + this.name + " pass jugador: "+this.psw+" Usuario: "+this.usuario);
    // let respuesta = this.MiHttpService.httpGetP("http://darodarioli.tech/API/loginWEB/registro?email="+this.name+"&pass="+this.psw+"&usuario="+this.usuario);
    //console.log(respuesta);
    
    
  }

}


// "darodarioli.tech/API/loginWEB/registro";
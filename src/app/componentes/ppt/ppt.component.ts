import { Component, OnInit } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import {ServicioGamesService} from '../../servicios/servicio-games.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PPTComponent implements OnInit {

  eleccion:string;
  eleccionMaquina:string;

  constructor(private MiServicioGame:ServicioGamesService) { }

  ngOnInit() {
  }

  verificarEleccion(evento)
  {

    console.log(evento.toElement.id);
    this.eleccion = evento.toElement.id;
    console.log(this.eleccion)
    this.juegoMaquina();
  }

  juegoMaquina()
  {
    let papel:string = "Papel";
    let piedra:string = "Piedra";
    let tijera:string = "Tijera";

    let arrayPPT = [piedra,papel,tijera];
    let eleccionNumero = Math.floor(Math.random() * 3);  

    console.clear();
    console.log("Maquina eligió: "+arrayPPT[eleccionNumero])
    console.log(arrayPPT);

    if(this.eleccion == "btnPapel")
    {      
      if(arrayPPT[eleccionNumero] == "Piedra") 
      {
        console.log("Ganaste!!");
        let idJugador = localStorage.getItem("iDjugadorLogueado");

        let respuesta = this.MiServicioGame.httpGet_Game("ActualizarPuntaje","jugador="+idJugador+"&juego=PPT&puntaje=1");
      }
      else if(arrayPPT[eleccionNumero] == "Papel")
      {
        console.log("Empataron")
      }
      else if(arrayPPT[eleccionNumero] == "Tijera")
      {
        console.log("Te ganó la máquina");
      }


    }
    else if(this.eleccion == "btnPiedra")
    {
      if(arrayPPT[eleccionNumero] == "Piedra") 
      {
        console.log("Empataron")        
      }
      else if(arrayPPT[eleccionNumero] == "Papel")
      {
        console.log("Te ganó la máquina");
      }
      else if(arrayPPT[eleccionNumero] == "Tijera")
      {
        console.log("Ganaste!!");
      }
    }
    else if(this.eleccion == "btnTijera")
    {
      if(arrayPPT[eleccionNumero] == "Piedra") 
      {
        console.log("Te ganó la máquina");
                
      }
      else if(arrayPPT[eleccionNumero] == "Papel")
      {
        console.log("Ganaste!!");
      }
      else if(arrayPPT[eleccionNumero] == "Tijera")
      {
        console.log("Empataron");
        
      }

    }
    

  }

}

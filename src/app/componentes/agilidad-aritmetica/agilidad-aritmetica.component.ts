import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import {ServicioGamesService} from '../../servicios/servicio-games.service';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private nombreJuego = "Agilidad Aritmética";
  private subscription: Subscription;

  private pNumero: number;
  private sNumero: number;
  private sOperador: string;
  private operadores: string[] = ["+", "-", "*", "/"];
  private respuesta: number;
  private mensajeResultado: string = "";

  ngOnInit() {
  }
  constructor(private MiServicioGame:ServicioGamesService) {
    this.ocultarVerificar = true;
    this.Tiempo = 5;

    console.info("Inicio agilidad");
  }
  NuevoJuego() {

    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {


        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);

  }
  verificar() {

    console.log("Tu respuesta: " + this.respuesta);

    if (this.nuevoJuego.realizarCuenta() == this.respuesta) {
     
      let idJugador = localStorage.getItem("iDjugadorLogueado");
      console.log("id"+idJugador);
      let respuesta = this.MiServicioGame.httpGet_Game("ActualizarPuntaje","jugador="+idJugador+"&juego=AgilidadaMasListado&puntaje=1");

      this.mensajeResultado = "Ganaste"
    }
    else {
      this.mensajeResultado = "¿Malo para las cuentas?";
    }

    document.getElementById('id02').style.display = 'block'

    this.ocultarVerificar = false;
    clearInterval(this.repetidor);
    this.respuesta = null;

  }

}

import { Component, OnInit } from '@angular/core';
import {ServicioGamesService} from '../../servicios/servicio-games.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  private palabra0 = {palabraAnagrama: "cetoimincono", palabraRespuesta: "conocimiento"};
  private palabra1 = {palabraAnagrama: "cuciaeloen", palabraRespuesta: "elocuencia"};
  private palabra2 = {palabraAnagrama: "totepreri", palabraRespuesta: "preterito"};
  private palabra3 = {palabraAnagrama: "ivotasusnt", palabraRespuesta: "sustantivo"};
  private palabra4 = {palabraAnagrama: "cociardaoncn", palabraRespuesta: "concordancia"};
  private palabra5 = {palabraAnagrama: "ohecinciaren", palabraRespuesta: "incoherencia"};
  
  private arrayPalabras = [this.palabra0,this.palabra1,this.palabra2,this.palabra3,this.palabra4,this.palabra5];


  private contador:number = 0;

  private nombreJuego = "Anagrama";
  private nuevoJuego:any; // = {palabraAnagrama: "cripvajats", palabraRespuesta: "javascript"};
  private palabraIngresada = "";
  private mensajeResultado:string = "";

  constructor(private MiServicioGame:ServicioGamesService) { }

  ngOnInit() {

    this.nuevoJuego = this.arrayPalabras[this.contador];

  }

  verificarPalabra(){

    console.info(this.nuevoJuego.palabraRespuesta);
    console.log(this.contador)
    
    if(this.palabraIngresada == this.nuevoJuego.palabraRespuesta)
    {
      
      this.mensajeResultado = "Felicitaciones, esa era la palabra!!";
      //http://localhost:8080/Resto/API/log/puntos/actualizar?jugador=1&juego=PPT&puntaje=2
      let idJugador = localStorage.getItem("iDjugadorLogueado");

      let respuesta = this.MiServicioGame.httpGet_Game("ActualizarPuntaje","jugador="+idJugador+"&juego=Anagrama&puntaje=1");

    }
    else
    {
      this.mensajeResultado = "Palabra Incorrecta"
    }

    document.getElementById('id02').style.display='block'
    console.log("En verificar palabra");
  }

  generarPalabra()
{
  console.log("En generar palabra");
  this.contador = this.contador +1;
  console.log(this.contador);
  this.nuevoJuego = this.arrayPalabras[this.contador];
}
}

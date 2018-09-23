import { Component, OnInit } from '@angular/core';
import {BotonGrilla} from './../../clases/boton-grilla';
import {ProcesaGrilla} from './../../clases/procesa-grilla';

@Component({
  selector: 'app-crucigrama-digital',
  templateUrl: './crucigrama-digital.component.html',
  styleUrls: ['./crucigrama-digital.component.css']
})


export class CrucigramaDigitalComponent implements OnInit {

  Titulo = "Sopa de letras";
  procesa:ProcesaGrilla;
  
  H0 = new BotonGrilla("H0",false,"H");
  H1 = new BotonGrilla("H1",false,"O");
  H2 = new BotonGrilla("H2",false,"L");
  H3 = new BotonGrilla("H3",false,"A");
  H4 = new BotonGrilla("H4",false,"X");
  H5 = new BotonGrilla("H5",false,"X");
  H6 = new BotonGrilla("H6",false,"X");
  H7 = new BotonGrilla("H7",false,"X");
  H8 = new BotonGrilla("H8",false,"X");
  

  A0 = new BotonGrilla("A0",false,"X");
  A1 = new BotonGrilla("A1",false,"C");
  A2 = new BotonGrilla("A2",false,"A");
  A3 = new BotonGrilla("A3",false,"S");
  A4 = new BotonGrilla("A4",false,"A");
  A5 = new BotonGrilla("A5",false,"X");
  A6 = new BotonGrilla("A6",false,"X");
  A7 = new BotonGrilla("A7",false,"X");
  A8 = new BotonGrilla("A8",false,"X");
  A9 = new BotonGrilla("A9",false,"X");
  

  linea1 = [this.H8,this.H8,this.H8,this.H8,this.H8,this.H8,this.H8,this.H8,this.H8,this.H8];
  linea2 = [this.A0,this.A1,this.A2,this.A3,this.A4,this.A5,this.A6,this.A7,this.A8,this.A9];
  linea7 = [this.H0,this.H1,this.H2,this.H3,this.H4,this.H5,this.H6,this.H7,this.H8,this.H8];

  respuesta1 = [this.H0,this.H1,this.H2,this.H3];
  respuesta2 = [this.A1,this.A2,this.A3,this.A4]

  matrizRespuestas = [this.respuesta1,this.respuesta2];

  matrizPrincipal = [this.linea1,this.linea2,this.linea1,this.linea1,this.linea1,this.linea1,this.linea1,this.linea7];

  name: string = '';

  
  constructor() {    
   }

  clasesBotones = {'btnPresionado': false, 'btnNormal':true};

  ngOnInit() {

    console.info("Inico Palabras Rápidas"); 
        
  }
  
  evaluar()
  {
      let esGanador:boolean = false;
      this.procesa = new ProcesaGrilla();
      let palabrasEncontradas = this.procesa.evaluaRespuesta(this.matrizPrincipal,this.matrizRespuestas)
      console.log("Palabras encontradas: "+palabrasEncontradas); 
  }

  verificar(boton)
  {
    
      this.cambiarEstado(boton.toElement.id);

        if(boton.toElement.className == "btnPresionado")
        {
            boton.toElement.className = "btnNormal";
        }
        else{
            boton.toElement.className = "btnPresionado"
        }  
    
    }  

    cambiarEstado(pId)
    {
 
      this.matrizPrincipal.forEach(linea => {        
        linea.forEach(element => {
            
          if(pId == element.id)
          {
            element.seleccionado = true;
          }

        });

      });

    }

}

import { Component, OnInit } from '@angular/core';
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'app-crucigrama-digital',
  templateUrl: './crucigrama-digital.component.html',
  styleUrls: ['./crucigrama-digital.component.css']
})


export class CrucigramaDigitalComponent implements OnInit {

  Titulo = " Una letra";
  A0 = "P";
  A1 = "R";
  A2 = "U";
  A3 = "E";
  A4 = "B";
  A5 = "A";
  A6 = "X";
  A7 = "X";
  A8 = "X";
  A9 = "X";
  

  name: string = '';

  
  constructor() {    
   }

  clasesBotones = {'btnPresionado': false, 'btnNormal':true};

  ngOnInit() {

    console.info("Inico Palabras Rápidas");     
  }

  
  setValue() { 
    
  console.log(this.name)  
  }

  verificar(boton)
  {
   
   console.log(boton.toElement.className);

   if(boton.toElement.className == "btnPresionado")
   {
      boton.toElement.className = "btnNormal";
   }
   else{
      boton.toElement.className = "btnPresionado"
   }  
   
  }  

  jugar(){

    

  }


  

}

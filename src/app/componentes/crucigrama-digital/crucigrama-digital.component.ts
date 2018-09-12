import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crucigrama-digital',
  templateUrl: './crucigrama-digital.component.html',
  styleUrls: ['./crucigrama-digital.component.css']
})


export class CrucigramaDigitalComponent implements OnInit {

  Titulo = " Una letra";
  cA1= "A";
  cA2= "B"
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
  
    // boton.removeClass("btnNormal");
    // boton.addClass("btnPresionado");
    console.log(boton.target.id);
    boton.target.id.className = "btnPresionado";

    // if(this.clasesBotones.btnNormal == true)
    // {
    //   console.log("entro primer if");

    //   this.clasesBotones.btnNormal = false
    //   this.clasesBotones.btnPresionado = true
    // }
    // else if(this.clasesBotones.btnNormal == false){
     

    //   console.log("entro segundo if");
    //   this.clasesBotones.btnNormal = true
    //   this.clasesBotones.btnPresionado = false
    // }





  // 
  // console.log(boton)
  // boton.className = "btnPresionado";
  // //boton.addClass("btnPresionado");
  // // element.removeClass("glyphicon glyphicon-ok");
  // // element.addClass("glyphicon glyphicon-pencil");" />
  
   
  }  


  

}


import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()

 //@Output() enviarListado: EventEmitter<any>= new EventEmitter<any>();

 listado: Array<any>;


  constructor() {
   }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}

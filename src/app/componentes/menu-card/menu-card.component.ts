import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})


export class MenuCardComponent implements OnInit {

private mensajeModal:string = "Necesitas estas logueado para poder jugar";
  
  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

    console.log("Paso por menu card");

    let tokenLogueado = localStorage.getItem('token');
    console.log(tokenLogueado);

    if(tokenLogueado == 'undefined' || tokenLogueado === null)
    {
     console.log("Entra");
      document.getElementById('id03').style.display = 'block'
    }

  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Crucigrama':
          this.router.navigate(['/Juegos/CrucigramaDigital']);
        break;//Crucigrama
        case 'PPT':
          this.router.navigate(['/Juegos/PPT']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
      break;//Crucigrama
      case 'Tateti':
      this.router.navigate(['/Juegos/Tateti']);
    break;//Crucigrama
    }
  }
}

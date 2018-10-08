export class BG{

    id: string;
    seleccionado:boolean = false;
    contenido:string;

    /* Test*/
      


    constructor(pId:string,pCont:string){
        this.id = pId;        
        this.contenido = pCont;   

    }


    // Parametros: matrizJuego,arrayRespuestas;
    // evalua si cada palabra del arrayRespuestas está en matrizJuego y va sumando puntos
    evaluaRespuesta()
    {

    let  _H0 = new BG("H0","H");
    let  _H1 = new BG("H1","O");
    let  _H2 = new BG("H2","L");
    let  _H3 = new BG("H3","A");
    let  _H4 = new BG("H4","X");
    let  _H5 = new BG("H5","X");
    let  _H6 = new BG("H6","X");
    let  _H7 = new BG("H7","X");
    let  _H8 = new BG("H8","X");
        
      
     let  linea1 = [_H8,_H8,_H8,_H8,_H8,_H8,_H8,_H8,_H8,_H8];
     let  linea7 = [_H0,_H1,_H2,_H3,_H4,_H5,_H6,_H7,_H8,_H8];
      
      let _matrizPrincipal = [linea1,linea1,linea1,linea1,linea1,linea1,linea1,linea7];
    



        for (let index = 0; index < _matrizPrincipal.length; index++) {
           
           
            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
                
            // }
            
        }
    
    }
   
}

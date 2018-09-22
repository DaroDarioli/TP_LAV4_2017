export class BotonGrilla{

    id: string;
    seleccionado:boolean = false;
    contenido:string;

    /* Test*/
      


    constructor(pId:string,pSelect:boolean,pCont:string){
        this.id = pId;
        this.seleccionado = pSelect;
        this.contenido = pCont;   

    }


    // Parametros: matrizJuego,arrayRespuestas;
    // evalua si cada palabra del arrayRespuestas está en matrizJuego y va sumando puntos
    evaluaRespuesta()
    {

    let  _H0 = new BotonGrilla("H0",false,"H");
    let  _H1 = new BotonGrilla("H1",false,"O");
    let  _H2 = new BotonGrilla("H2",false,"L");
    let  _H3 = new BotonGrilla("H3",false,"A");
    let  _H4 = new BotonGrilla("H4",false,"X");
    let  _H5 = new BotonGrilla("H5",false,"X");
    let  _H6 = new BotonGrilla("H6",false,"X");
    let  _H7 = new BotonGrilla("H7",false,"X");
    let  _H8 = new BotonGrilla("H8",false,"X");
        
      
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


/**INICIO 13:05 ATÉ 15:20
 * INICIO 16:00 ATÉ 18:00
 * ITEM 1
 * CLASSE ATRIBUTO PRIVADO
 */

 class gameDezenas{
    constructor(param1, param2){ //ITEM 2
        this._numPossiveis = param1;
        var resultado = 0;
        this._totJogos = param2;
        this._jogos     = {};   
        this.dezenasAleatorias();
       
    }

    get numPossiveis(){        //ITEM 3
      // this._numPossiveis = this.dezenasAleatorias(param1);
        return this._numPossiveis;
    }    
    set numPossiveis(param1){ //ITEM 3        
        this._numPossiveis = param1;
    }
    get totJogos(){        //ITEM 3
        return this._totJogos;
    }    
    set totJogos(param2){ //ITEM 3
        this._totJogos = param2;
    }
    
  dezenasAleatorias() { //ITEM 4
      var range = 60;
      var qtdjogos = [6,7,8,9,10];
      
        if (qtdjogos.indexOf(this._numPossiveis) >= 0){
            var indiceSorteado;
            var numero =[];

                for (var i = 0; i < this._numPossiveis; i++){
                    
                    indiceSorteado = Math.floor((Math.random() * range)+1);//numeros aleatorios entre 1 e 60
                
                        while(numero.indexOf(indiceSorteado) >= 0){ // enqanto o número não existir;
                            indiceSorteado = Math.floor((Math.random() * range)+1);// numeros aleatorios entre 1 e 60 
                        }

                    numero.push(indiceSorteado);
                }
                 
            return numero.sort();
        }
        else {
            alert("Digite um valor entre 6 e 10.");
            return false;
        }
    }

  allJogos() {
    
    for (var p = 0; p < this._totJogos; p++) { 

        this._jogos[p] = [p,this.dezenasAleatorias()]; //criando o array multidimencional;                  
    }
  
    return this._jogos;
}
         
                   

}

function orderna(x,y){
    return x -y;

  }


 function testeClass(){
 var teste = new gameDezenas(6,2);
 //console.log(teste._numPossiveis);
 //console.log ("NUM POSSIVES " + teste.numPossiveis);
 //console.log("TOT DE JOGOS "+ teste.totJogos);
 //var teste1 = teste._numPossiveis = 8;

 //console.log(teste.numPossiveis);
 console.log(teste.allJogos());

 }
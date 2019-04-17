
 class gameDezenas{
    constructor(param1, param2,param3){ //ITEM 2
        this._numPossiveis = param1;
        this._resultado = {};
        this._totJogos = param2;
        this._jogos     = {};   
        this.dezenasAleatorias();
        this._valorDigitado = param3; //valor digitado pelo usu·rio que ser· comparado; complemnto fora da atividade;
       
    }

    get numPossiveis(){        //ITEM 3      
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

    get valorDigitado(){        //ITEM 3      
        return this._valorDigitado;
    }    
    set valorDigitado(param3){ //ITEM 3        
        this._valorDigitado = param3;
    }
    
  dezenasAleatorias() { //ITEM 4
      var range = 60;
      //var qtdjogos = [6,7,8,9,10];
      
        if (this._numPossiveis >=6 && this._numPossiveis <= 10){
            var indiceSorteado;
            var numero =[];

                for (var i = 0; i < this._numPossiveis; i++){
                    
                    indiceSorteado = Math.floor((Math.random() * range)+1);//numeros aleatorios entre 1 e 60
                
                        while(numero.indexOf(indiceSorteado) >= 0){ // enqanto o n√∫mero n√£o existir;
                            indiceSorteado = Math.floor((Math.random() * range)+1);// numeros aleatorios entre 1 e 60 
                        }

                    numero.push(indiceSorteado);
                }
                 
            return numero.sort();
        }
        else {
            alert("Digite um valor entre 6 e 10. ;)");
            return false;
        }
    }

  allJogos() { //ITEM 5
    
    for (var p = 0; p < this._totJogos; p++) { 

        this._jogos[p] = [this.dezenasAleatorias()]; //criando o array multidimencional;                  
    }  
    return this._jogos;
}
    math(){

        var sorteiosAll = this.allJogos();
        var numDigiUser = this.valorDigitado;
        var controlAcertos =0;
        var totMega = 4;
        var totalJogos =this.totJogos;
        var numPossiveis = this.numPossiveis;

        for (var p = 0; p < totalJogos; p++) { 
            for (var q = 0; q < numPossiveis; q++) { 
                if(sorteiosAll[p][q] == numDigiUser[q]){
                    controlAcertos++;
                }               

            }
            
            if(controlAcertos >= totMega){

                this._resultado[p] =[sorteiosAll[p][q],controlAcertos];
                controlAcertos = 0;
            console.log(this._resultado);
            }
    }

    return this._resultado;
}

}


 function MyClass(){//ITEM  DE TESTE
    this.numPossiveis = document.getElementById('number2').value;
    this.totJogos = document.getElementById('number3').value;
    this.valorDigitado = document.getElementById('number1').value;   // valores escolhidos pelo usu·rio   
  
    var campo1= this.valorDigitado;
    var campo2 = this.numPossiveis;
    var campo3 = this.totJogos;

 var teste = new gameDezenas(6,6);
 console.log(teste.math());

 }
 
 function start3(){ // ITEM 7

    this.numPossiveis = document.getElementById('number2').value;
    this.totJogos = document.getElementById('number3').value;
    this.valorDigitado = document.getElementById('number1').value;   // valores escolhidos pelo usu·rio   
  
    var campo1= this.valorDigitado;
    var campo2 = this.numPossiveis;
    var campo3 = this.totJogos;

    var teste = new gameDezenas(campo2,campo3,campo1);  

    param=teste.allJogos();

    var tptMain = document.querySelector("#tplMain1");
    var tptBody = document.querySelector("tbody");
    obj_td = tptMain.content.querySelectorAll("td");
  //  console.log(param);

    for(var i =0;i < teste._totJogos; i++){ 

        col0 = obj_td[0].textContent = i;
        col1 = obj_td[1].textContent = param[i];
        col2 = obj_td[2].textContent = campo1; 

        var newLin = document.importNode(tptMain.content,true);
        tptBody.appendChild(newLin); 
    }

    //mat

// falta implementar o valor das correspondecinas dos numeros digitados e retornar para a funÁ„o principal
//para mostra o resultado jogo:
//as linhas mudar„o de cor; e ser· exibido uma img de ganhador.
}
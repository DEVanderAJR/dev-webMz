
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
      var range = 10;
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

        this._jogos[p] = this.dezenasAleatorias(); //criando o array multidimencional;                  
    }  
    return this._jogos;
}
    math(){

        var sorteiosAll =this.allJogos(); //recebe todos os jogos da funÁ„o de jogos 
        var numDigiUser = this.valorDigitado; // recebe os valores digitados do usu·rio para comparaÁ„o do sorterio
        var controlAcertos =0; //controla a qtd de acertos na compraÁ„o
        var totMega = 4; // total de pontos aceitos na Mega para considerar ganhador de algum premio >=4
        var totalJogos =this.totJogos; //recebe qtd de jogos digitado para o usu·rio uma unica vez;
        var numPossiveis = this.numPossiveis; //recebe qtd de numeros a serem sorteados - digitado usu·rio uma unica vez;
        var numAllright =[]; //recebe os numeros sorteados;
        var numAll=[], teste ;

        for (var p = 0; p < totalJogos; p++) { 

            for (var q = 0; q < numPossiveis; q++) { 

                console.log(sorteiosAll[p][q],numDigiUser[q]);           
               
                for( var j = 0; j < numPossiveis; j++){
                   // if(numDigiUser.indexOf(sorteiosAll[p][q])>=0){
                    if(sorteiosAll[p][q] == numDigiUser[j]){
                        controlAcertos++;
                       numAll.push(numDigiUser[j]);
                    }  

            }
                
            //    console.log(numAllright);

            }

            numAllright[p] = [numAll]; // atribuindo a sequencia de numeros de acertos na varialvel principal;
            
            console.log("NumAllright: "+numAllright[p]);
            console.log("numall: "+ numAll);

           // numAll.length = 0; //limpando array da iteraÁ„o anterior
            
          //  if(controlAcertos >= totMega){

                this._resultado[p] =[
                    { id: p,
                      sorteios: sorteiosAll[p],
                      math: numAllright[p],
                      resultado: controlAcertos
                    }
                ]
                controlAcertos = 0;
                numAll.length =0;
           // console.log(this._resultado);
           // }
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

    this.numPossiveis = 6;// document.getElementById('number2').value;
    this.totJogos = 3;//document.getElementById('number3').value;
    var controlNumber =  document.getElementById('number1').value;   // valores escolhidos pelo usu·rio   
    this.valorDigitado = controlNumber.split(','); 

    var campo1= this.valorDigitado;
    var campo2 = this.numPossiveis;
    var campo3 = this.totJogos;

    var teste = new gameDezenas(campo2,campo3,campo1);  

    param=teste.math();
    console.log(param);

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
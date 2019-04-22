
 class gameDezenas{ //ITEM 1
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

    allJogos = function() { //ITEM 5
        var limiteJogos = this._totJogos;
        
        for (var p = 0; p < limiteJogos; p++) { 

            this._jogos[p] = this.dezenasAleatorias(); //criando o array multidimencional;                  
        }  
        return this._jogos;
    }
    math = function(){

        var sorteiosAll =this.allJogos(); //recebe todos os jogos da funÁ„o de jogos 
        var numDigiUser = this.valorDigitado; // recebe os valores digitados do usu·rio para comparaÁ„o do sorterio
        var controlAcertos =0; //controla a qtd de acertos na compraÁ„o        
        var totalJogos =this.totJogos; //recebe qtd de jogos digitado para o usu·rio uma unica vez;
        var numPossiveis = this.numPossiveis; //recebe qtd de numeros a serem sorteados - digitado usu·rio uma unica vez;
        var numAllright =[]; //recebe os numeros sorteados;
        var numAll=[];

        for (var p = 0; p < totalJogos; p++) { 
            for (var q = 0; q < numPossiveis; q++) { 
                for( var j = 0; j < numPossiveis; j++){

                  if(sorteiosAll[p][q] == numDigiUser[j]){
                        controlAcertos++;
                       numAll.push(numDigiUser[j]);
                    }
                }
            }

            numAllright[p] = numAll.slice(); // atribuindo a sequencia de numeros de acertos na varialvel principal;
       
            this._resultado[p] =
                    { 'id': p,
                      'sorteios': sorteiosAll[p].join("-"),
                      'math': numAllright[p].join("-"),
                      'resultado': controlAcertos
                    }                
            controlAcertos = 0;
            numAll.length =0;
        }

    return this._resultado;
    }
}

function start3(){ // ITEM 7
    var totMega = 4; // total de pontos aceitos na Mega para considerar ganhador de algum premio >=4
    var gain = 0;
    this.numPossiveis =  document.getElementById('number2').value;
    this.totJogos = document.getElementById('number3').value;
    var controlNumber = document.getElementById('number1').value;   // valores escolhidos pelo usu·rio   
    this.valorDigitado = controlNumber.split(','); 

    var campo1 = this.valorDigitado;
    var campo2 = this.numPossiveis;
    var campo3 = this.totJogos;

    var teste = new gameDezenas(campo2,campo3,campo1);  // instanciando um novo objeto da classe

    param=teste.math();

    var tptMain = document.querySelector("#tplMain1");
    var tptMain2 = document.querySelector("#tplMain2"); // linhas sucess quando ganhar
    var tptBody = document.querySelector("tbody");
    obj_td = tptMain.content.querySelectorAll("td");
    obj_td2 = tptMain2.content.querySelectorAll("td"); // linhas sucess quando ganhar
    
    //  console.log(param);

    for(var i =0;i < teste._totJogos; i++){ 

            if(param[i]['resultado'] < totMega){

                col0 = obj_td[0].textContent = param[i]['id'];
                col1 = obj_td[1].textContent = param[i]['sorteios'];
                col2 = obj_td[2].textContent = param[i]['math']; 
                col3 = obj_td[3].textContent = param[i]['resultado']; 
                col4 = obj_td[4].textContent = campo1.join("-");

                var newLin = document.importNode(tptMain.content,true);
                tptBody.appendChild(newLin); 
            }
            else // destacar linhas quando o acero for >= 4;
            {
                col0 = obj_td2[0].textContent = param[i]['id'];
                col1 = obj_td2[1].textContent = param[i]['sorteios'];
                col2 = obj_td2[2].textContent = param[i]['math']; 
                col3 = obj_td2[3].textContent = param[i]['resultado']; 
                col4 = obj_td2[4].textContent = campo1.join("-");

                var newLin = document.importNode(tptMain2.content,true);
                tptBody.appendChild(newLin); 

                gain++;

                }
            } 
    return gain;
}
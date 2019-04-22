controlNumber =[]; //variavel para controlar numeros digitados;
arrDaSorte=[]; //array de numeros aleatorios
gain = 3; //numero maximo de acertos para vc sair ganhador
range = 15; //Multiplicador do range para numeros aleatorios
limite = 5;// document.getElementById("number2").value;  // limite de números digitados
controlCount = 0; //controlador de itera??o
colorMath = 'black';
colorBg ='white';
/**
 * Fun??o main, realiza os testes e intancia outras fun??es
 */
function mgtMonitor(param){//ITEM 6;

   if (param == 1 && trataNumeros()) {
        document.getElementById('monitor').style.display = "block";    
        
        geraNumeros();//finalizar implementa??o  para gerar o resultado se os numeros digitados foram sorteados ou n?o
         // resultGame(geraNumeros());

        }else{     
            controlCount =0; //zerando o contador;

            if(param == 0 ){// tentando novamente;

                clearInfo(1);notifica(2);notifica(3);notifica(4);notifica(5);
                notifica(6);            }
            else {

                clearInfo(1);notifica(2);notifica(3);
            }   
    } 
    
}
/**
 * Funcao para limpar dados do ultimo sorteio
 */
function clearInfo(i,param){ // falta implementar os recuros no html;
    /**
     * Alterando propriedades dos filhos     * 
     */

    var  tagMaster = document.getElementById('monitor');

    if(i ==1 ) document.getElementById('monitor').style.display = "none";


    if(i== 0) {
       
            for(var i = 0; i< tagMaster.children.length; i++)
            {
                if(tagMaster.children[i].tagName='div')
                    tagMaster.children[i].style.background =colorBg;
        
             }

            }
    if (i==2){
   
        for(var i = 0; i <= limite; i++)
        {
            if(tagMaster.children[i].tagName='div')
                tagMaster.children[i].style.display = 'block';

    }

    if (i==3){
       // tagMaster.children[param].tagName='div');
                tagMaster.children[param].style.display = 'block';

    }
}

         notifica(3);
}
function geraNumeros(x){

    /*this.numPossiveis = document.getElementById('number2').value;
    this.totJogos = document.getElementById('number3').value;
    this.valorDigitado = document.getElementById('number1').value;   // valores escolhidos pelo usu?rio   
  
    var campo1= this.valorDigitado.split(',');
    var campo2 = this.numPossiveis;
    var campo3 = this.totJogos; 
    */  
    controlCount = 0;

   // classe= new gameDezenas(campo2, campo3,campo1);
    controlCount =start3();

return controlCount;
} 
function trataNumeros(){
   
    tst1 = '3,4,5,6,7,8';// document.getElementById('number1').value;   // valores escolhidos pelo usu?rio   
    tst2 = '6';// this.numPossiveis = document.getElementById('number2').value;
    tst3 = '3';//this.totJogos = document.getElementById('number3').value;

        if(tst1 =="" || tst2 ==""|| tst3 == "" ){
          
            notifica(1);

        }else{
            
            notifica(0);
                controlNumber = tst1.split(",");
                var trataNumeros = controlNumber.length; //numeros digitados
                var qtdjogos = [6,7,8,9,10];

                if (qtdjogos.indexOf(trataNumeros) >= 0){
            
                    return true; //retorna true se deu match;
                    }                               
                    else{
                        //controlCount =0; 
                        alert("Escolha o total de numeros entre 6 e 10! Voc?: " + trataNumeros);
                        clearInfo(1);notifica(2);notifica(3);
                        return false;
            }
  }
}
/**
 * Funcao responsavel pelas notificoes do sistema
 */
function notifica(i){//falta implementar os recursos de chamada no html

   switch(i){

        case 0:  document.getElementById('notificando').style.display ='none'; break;
        case 1:  document.getElementById('notificando').style.display ='block'; break;        
        case 2:  document.getElementById('gainGame').style.display ='none'; break;         
        case 3: {
            document.getElementById('endGame').style.display ='none'; break;
          }
         case 4: 
            document.getElementById('number1').value ="";break; 

        case 5: 
            document.getElementById('cancela').style.display ='none';
        case 6:{
                document.getElementById('testeSorte').style.display ='block';
                document.getElementById('infoGameG').style.display ='none';
        }
    }
    
}
/**
 * Funcao que exibe o resutado dos sorteios
 */
function resultGame(controlCount){   

    if ((controlCount == 0 || controlCount <= gain) && tst1 != ""){
      // notifica(3);
       document.getElementById('gainGame').style.display ='none';
       document.getElementById('endGame').style.display ='block';
       document.getElementById('infoGameG').style.display ='block';
       document.getElementById('infoGameG').innerHTML ='Voc? perdeu! :< </br>'+'Acertos: '+ controlCount; 
       document.getElementById("endGame").innerHTML = " <img src='img/loser.png' width = '200px'></img>";
       controlCount =0;
       document.getElementById('cancela').style.display ='block';
       document.getElementById('testeSorte').style.display ='none';
    }
    else if (controlCount != 0 && tst1 !="") {
        // notifica(2);
         document.getElementById('endGame').style.display ='none';
         document.getElementById('gainGame').style.display ='block';
         document.getElementById('infoGameG').style.display ='block';
         document.getElementById('infoGameG').innerHTML ='Voc? ganhou! :) </br>'+'Acertos: '+ controlCount; 
         document.getElementById("gainGame").innerHTML = " <img src='img/gain.jpg' width = '200px'></img>";
         controlCount =0;
         document.getElementById('cancela').style.display ='block';
         document.getElementById('testeSorte').style.display ='none';
         
    }
         
 

}

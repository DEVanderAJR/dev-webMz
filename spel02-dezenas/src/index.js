/**
 * Função main, realiza os testes e intancia outras funções
 */
function mgtMonitor(param){//ITEM 6;

  if(param == 1 && trataNumeros()) {
        document.getElementById('monitor').style.display = "block";    
        
         resultGame(start3());

    }else{     
        controlCount =0; //zerando o contador;
        if(param == 0 ){// tentando novamente;

                clearInfo(1);notifica(2);notifica(3);notifica(5);
                notifica(6);
        }
        else{
                clearInfo(1);notifica(2);notifica(3);
        }   
    } 
}
/**
 * Funcao para limpar dados do ultimo sorteio
 */
function clearInfo(i){ 
    if(i ==1 ) document.getElementById('monitor').style.display = "none"; notifica(3);
} 
/**
 * Funcao para tratar imput de dados
 */
function trataNumeros(){
   
    tst1 =  document.getElementById('number1').value;   // valores escolhidos pelo usu?rio   
    tst2 =  document.getElementById('number2').value;
    tst3 =  document.getElementById('number3').value;

    if(tst1 =="" || tst2 ==""|| tst3 == "" ){

        notifica(1);
    }
    else{
        notifica(0);
        controlNumber = tst1.split(",");
        var trataNumeros = controlNumber.length; //numeros digitados
        var qtdjogos = [6,7,8,9,10];

        if (qtdjogos.indexOf(trataNumeros) >= 0){        
            return true; //retorna true se deu match;
        }                               
        else{                    
            alert("Escolha o total de numeros entre 6 e 10! Você: " + trataNumeros);
            clearInfo(1);notifica(2);notifica(3);
            return false;
        }
    }        
}
/**
 * Funcao responsavel pelas notificoes do sistema
 */
function notifica(i){

   switch(i){

        case 0:  document.getElementById('notificando').style.display ='none'; break;
        case 1:  document.getElementById('notificando').style.display ='block'; break;        
        case 2:  document.getElementById('gainGame').style.display ='none'; break;         
        case 3:  document.getElementById('endGame').style.display ='none'; break;
        case 4:  document.getElementById('number1').value ="";break; 
        case 5:  document.getElementById('cancela').style.display ='none';
        case 6:  {
                 document.getElementById('testeSorte').style.display ='block';
                 document.getElementById('infoGameG').style.display ='none';
                 }
    }
    
}
/**
 * Funcao que exibe o resutado dos sorteios
 */
function resultGame(controlCount){   

    if ((controlCount == 0 || controlCount < 1 ) && tst1 != ""){
        document.getElementById('gainGame').style.display ='none';
        document.getElementById('endGame').style.display ='block';
        document.getElementById('infoGameG').style.display ='block';
        document.getElementById('infoGameG').innerHTML ='Você não acertou </br> nenhum Jogo! </br>'; 
        document.getElementById("endGame").innerHTML = " <img src='img/loser.png' width = '200px'></img>";
        controlCount =0;
        document.getElementById('cancela').style.display ='block';
        document.getElementById('testeSorte').style.display ='none';

    }
    else if (controlCount != 0 && tst1 !="") {

         document.getElementById('endGame').style.display ='none';
         document.getElementById('gainGame').style.display ='block';
         document.getElementById('infoGameG').style.display ='block';
         document.getElementById('infoGameG').innerHTML ='Você ganhou! :) </br>'+'Acertou: '+ controlCount +' jogos.'; 
         document.getElementById("gainGame").innerHTML = " <img src='img/gain.jpg' width = '200px'></img>";
         controlCount =0;
         document.getElementById('cancela').style.display ='block';
         document.getElementById('testeSorte').style.display ='none';         
    }
}

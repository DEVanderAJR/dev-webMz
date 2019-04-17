controlNumber =[]; //variavel para controlar numeros digitados;
arrDaSorte=[]; //array de numeros aleatorios
gain = 3; //numero maximo de acertos para vc sair ganhador
range = 15; //Multiplicador do range para numeros aleatorios
limite = 5;// document.getElementById("number2").value;  // limite de números digitados
controlCount = 0; //controlador de itera??o
colorMath = 'black';
colorBg ='white';
//include ("class/class_sorteDezenas.js")

/**
 * Função main, realiza os testes e intancia outras funçães
 */
function mgtMonitor(param, param2, param3){

   if (param == 1 && trataNumeros()) {
        document.getElementById('monitor').style.display = "block";
       // geraNumeros(1);
        totJogos(3);
       // resultGame();

        }else{     
            controlCount =0; //zerando o contador;

            if(param == 0 ){// tentando novamente;

                clearInfo(1);notifica(2);notifica(3);notifica(4);notifica(5);
                notifica(6);

            }
            else {

                clearInfo(1);notifica(2);notifica(3);
            }
        
    } 
    
}
/**
 * Função para limpar dados do ultimo sorteio
 */
function clearInfo(i,param){
    
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
/**
 * Função que tratar os numeros digitados
 */
function trataNumeros(){

    tst1 = "";
    limite =7;//document.getElementById('number2').value;
    numJogos = 3; 
    tst1 = '1,2,3,4,10,5,7'//document.getElementById('number1').value; 

        if(tst1 == ""){
           //alert("campo vazio!" + tst1);
            notifica(1);

        }else{
              //  alert(tst1);
              notifica(0);
                controlNumber = tst1.split(",");
                var trataNumeros = controlNumber.length; //numeros digitados
            
                if(trataNumeros == limite){
                    return true; //retorna true se deu match;
                    }
                    else if(trataNumeros > limite) {   
                        controlCount =0;                   
                        alert("Escolha apenas 5 números da sorte! Voc? digitou: " + trataNumeros);
                        return false;
                        
                        }                
                    else if(trataNumeros < limite) {
                        controlCount =0; 
                        alert("Escolha 5 números da sorte! Voc? digitou apenas: " + trataNumeros);
                        clearInfo(1);notifica(2);notifica(3);
                        return false;
                    }
            } 


}
/**
 * Função que gera os numeros sortidos sem repeti??o
 */
function totJogos(numJogos){
    for(var k =0; k<= numJogos; k++){

    geraNumeros(1);

    }

}

function geraNumeros(x){

    var aleatorio = 0;    
    numero = [];
    var numeroDig =document.getElementById('number1').value; //Numeros a serem sorteados;
    var idHtml = "num"; 
    controlCount = 0;
    var tagPai1 = document.getElementById('monitor');
         
return controlCount;
} 


/***
 * Random retorna um numero entre 0 e 1 a função fica mais assertiva em quest?o de números aleatorios;
 * Round retorna o valor inteiro mais pr?ximo;
 * Floor retorna o menor número inteiro dentre o range;
 * */    
 
function noRepeat(){
    var indiceSorteado;

    indiceSorteado = Math.floor((Math.random() * range));
   
    while(numero.indexOf(indiceSorteado) >= 0){ // enqanto o número núo existir;

        indiceSorteado = Math.floor((Math.random() * range)); 

    }

 
return indiceSorteado;

}

/**
 * Função respons?vel pelas notifica??es do sistema
 */
function notifica(i){

   // $('#notificando').toast('show');
   switch(i){

        case 0:  document.getElementById('notificando').style.display ='none'; break;
        case 1:  document.getElementById('notificando').style.display ='block'; break;        
        case 2:  {
                document.getElementById('gainGame').style.display ='none'; break;
                // var no1 = document.getElementById('gainGame');
                // document.getElementById('gainGame'); break;
                //  no1.parentNode.removeChild(no1); break;
                    
                }
        case 3: {
            document.getElementById('endGame').style.display ='none'; break;
         //   var no2 = document.getElementById('endGame');
            //document.getElementById('endGame'); break;
          //  no2.parentNode.removeChild(no2); break; // delanto filho a núvel de nú e núo somente o conte?do;
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
 * Função que exibe o resutado dos sorteios
 */
function resultGame(){
   // alert("resultgame:");

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


/**INICIO 13:05 ATÉ 15:20
 * INICIO 16:00 ATÉ 21:40
 * INICIO 22:00
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

  allJogos() { //ITEM 5
    
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
 start(teste.allJogos());

 }
 

 function start(param){

    var teste = new gameDezenas(6,10);
    //console.log(teste._numPossiveis);
    //console.log ("NUM POSSIVES " + teste.numPossiveis);
    //console.log("TOT DE JOGOS "+ teste.totJogos);
    //var teste1 = teste._numPossiveis = 8;
   
    //console.log(teste.numPossiveis);
    param=teste.allJogos();
   


    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var cabec  =  document.createElement("thead");
    var th = document.createElement("th");
      //th.appendChild("total");
     // th.appendChild("nome");
   
       
    // creating all cells
    for (var j = 0; j < teste.totJogos; j++) {
        // creates a table row
        var row = document.createElement("tr");      
        

        for (var i = 0; i < 2; i++) {
            
            
            var cellText1 = document.createTextNode(param[j]);
            var cellText = document.createTextNode(param[j][i]);
            cell.appendChild(th);
            cell.appendChild(cellText);  
            cell.setAttribute("class","table-success");    
             
            row.appendChild(cell);

        }

        
        tblBody.appendChild(row);
    }

    
    tbl.appendChild(tblBody);
    
    body.appendChild(tbl);
    
    tbl.setAttribute("class","table table-bordered");
  
}


function start2(param){

    var teste = new gameDezenas(6,2);
    //console.log(teste._numPossiveis);
    //console.log ("NUM POSSIVES " + teste.numPossiveis);
    //console.log("TOT DE JOGOS "+ teste.totJogos);
    //var teste1 = teste._numPossiveis = 8;
   
    //console.log(teste.numPossiveis);
    param=teste.allJogos();
   


    // get the reference for the body
    var table='<table class="table table-striped">';
    table += '<thead>';
    table += '<tr>';
    table += '<th scope="col">#</th><th scope="col">Jogos</th><th scope="col">Numero Sorteados</th><th scope="col">Resultado</th>';
    table += ' </tr>    </thead>        <tbody>';

        /**
         * <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
         * 
         */

    // creating all cells
    for (var j = 0; j < teste.totJogos; j++) {
        // creates a table row
       table += '<tr><th scope="row">';
       table += j+ '</th>';
      for (var i = 0; i < teste.totJogos; i++) {

        table += '<td>' + param[j][i] +'</td>';
          
            }
        table += '</tr>';       


    }

    table += '</tbody></table>';
    
    document.getElementsByName("monitor").innerHTML = table;
    console.log (table);



}
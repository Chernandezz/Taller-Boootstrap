function consumirAPI(){
    deporte_disciplina=[];
    primeros_puestos_oros=[];
    segundos_puestos_platas=[];
    terceros_puestos_bronces=[];
    oros=0
    platas=0
    bronces=0
    bolo=0
    levantamiento=0
    triatlon=0
    mbx=0
    saltoAlto=0
    atletismo=0
    badminton=0
    boloDiscapacidad=0
    ciclismo=0
    tennis=0

    //consumo de la API
    fetch('https://www.datos.gov.co/resource/u2dw-a98n.json')   
        .then(respuesta_exitosa => respuesta_exitosa.json())    //convierte la promesa en formato .json 
        .then(function(datos_obtenidos) {
            datos_obtenidos.forEach(elemento => {
                if (elemento.deporte_disciplina != undefined && elemento.primeros_puestos_oros != undefined
                    && segundos_puestos_platas != undefined && terceros_puestos_bronces != undefined){
                    deporte_disciplina.push(elemento.deporte_disciplina);
                    primeros_puestos_oros.push(elemento.primeros_puestos_oros);
                    segundos_puestos_platas.push(elemento.segundos_puestos_platas);
                    terceros_puestos_bronces.push(elemento.terceros_puestos_bronces);
                }
        });
    
        primeros_puestos_oros.forEach(elemento =>{
            if(elemento != 0){
                oros++;
            }
        });

        segundos_puestos_platas.forEach(elemento =>{
            if(elemento != 0){
                platas++;
            }
        });

        terceros_puestos_bronces.forEach(elemento =>{
            if(elemento != 0){
                bronces++;
            }
        });
    
        deporte_disciplina.forEach(elemento =>{
            if(elemento == 'Bolo'){
                bolo++;
            }else if(elemento == 'Levantamiento de pesas'){
                levantamiento++;
            }else if(elemento =='Triatlon'){
                triatlon++;
            }else if(elemento =='Ciclismo BMX'){
                mbx++;
            }else if(elemento == 'Atletismo, Salto alto'){
                saltoAlto++;
            }else if(elemento == 'Atletismo'){
                atletismo++;
            }else if(elemento == 'Badminton'){
                badminton++;
            }else if(elemento == 'Bolo discapacidad auditiva'){
                boloDiscapacidad++;
            }else if(elemento == 'Ciclismo MTB'){
                ciclismo++;
            }else if(elemento == 'Tenis Silla de ruedas'){
                tennis++;
            };

        });
        var data = [
            {
              x: ['oros', 'platas', 'bronces'],
              y: [oros, platas, bronces],
              type: 'bar',
            }
          ];
          Plotly.newPlot('grafico', data);


          var data2 = [{
            type: "pie",
            values: [bolo, levantamiento, triatlon, mbx, saltoAlto,atletismo,badminton,boloDiscapacidad,ciclismo,tennis],
            labels: ["Bolos", "Levanatamiento de pesas", "Triatlon", "BMX", "Salto Alto", "Atletismo","Badminton","Bolo discapacidad auditiva","Ciclismo MTB", "Tenis Silla de ruedas"],
            textinfo: "label+percent",
            insidetextorientation: "radial"
           }]
          
          
          var layout = [{
            height: 700,
            width: 700
          }]
          
        Plotly.newPlot('grafico2', data2, layout)  
    });

}

consumirAPI();

















function calcu(){
    var calculo = Number(document.getElementById("valore").value)
    var calculo2 = Number(document.getElementById("valore2").value)
    var resultado = 0
    if (document.getElementById("pc").checked){
        resultado = calculo - calculo2
        if (resultado == 0){
            resultado = "O valor foi pago com sucesso!"
        }
        else if (resultado >= 0){
            resultado = "Falta pagar " + resultado + "$"
        }
        else if (resultado <= 0){
            resultado = resultado - resultado + (-resultado )
            resultado = "Troco de " + resultado + "$"
   } 
   }
   else if(document.getElementById("dl").checked){
        resultado = calculo / calculo2 
        resultado = "O veículo faz " + Math.floor(resultado, -2) + " por litro"
   }
   else if(document.getElementById("ni").checked){     
        resultado = calculo/2 -1
        resultado = "Seu número contém " + Math.floor(resultado) + " números pares"
   }
   else if(document.getElementById("np").checked){
        var numObservado = 1
        
        while (numObservado < calculo){
             var candidato = 1
             var divisores = 0
             while (candidato <= numObservado){
                if(numObservado % candidato == 0){
                   divisores++
                }
                candidato++
             }
             if(divisores == 2){
                resultado++
             }
             numObservado++
        }
       
   }
   else{
    resultado = "Insira um valor válido"
    alert(resultado)
   }

     document.getElementById("resultado").innerHTML = resultado
}

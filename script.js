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
            resultado = "Troco de " + resultado + "$"
   } 
   }
   else if(document.getElementById("dl").checked){
        resultado = calculo / calculo2 
        resultado = "O veículo faz " + Math.floor(resultado, -2) + " por litro"
   }
   else if(document.getElementById("ni").checked){     
        resultado = calculo/2
        resultado = "Seu número contém " + Math.floor(resultado)
   }
   else if(document.getElementById("np").checked){
       
   }
   else{
    resultado = "Insira um valor válido"
    alert(resultado)
   }

     document.getElementById("resultado").innerHTML = resultado
}

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
        resultado = calculo/2
        resultado = "Seu número contém " + Math.floor(resultado) + " números pares"
   }
   else if(document.getElementById("np").checked){
    do {
        if (calculo == 2 || calculo == 3){
          resultado++
          calculo -= 1
          
        }
        else if (calculo % 2 == 0 || calculo % 3 == 0 || calculo % 5 == 0){
          resultado += 0
          calculo = calculo - 1
           
        }
        else {
          resultado++
          calculo = calculo - 1
        }
      }
    while (calculo >= 0 )
    resultado = "Seu número contém " + resultado + " número(s) primo(s)"
       
   }
   else{
    resultado = "Insira um valor válido"
    alert(resultado)
   }

     document.getElementById("resultado").innerHTML = resultado
}

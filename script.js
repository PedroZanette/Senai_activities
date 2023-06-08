function converte(){
    var temperaturaInicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if (document.getElementById("cf").checked){
         resultado = (temperaturaInicial*1.8) + 32
    }
    else if(document.getElementById("fc").checked){
         resultado = (temperaturaInicial - 32) / 1.8
    }
    else if(document.getElementById("ck").checked){
        resultado = (temperaturaInicial + 273.15)
    }
    else if(document.getElementById("kc").checked){
        resultado = (temperaturaInicial - 273.15)
    }
    else if(document.getElementById("kf").checked){
        resultado = ((9*(temperaturaInicial - 273.15)) / 5) + 32
    }
    else if(document.getElementById("fk").checked){
        resultado = 5*(temperaturaInicial - 32) / 9 + 273.15
    }
    else{
        resultado = "Você me parece pobre"
        alert(resultado)
    }
   
    document.getElementById("resultado").innerHTML = resultado
}

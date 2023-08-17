var resultado = 0

function anoNovo(){
    let i = 10
    while(i > 0){
        resultado = i
        i--
        console.log(resultado)
    }
    resultado = "FELIZ ANO NOVO"
    console.log(resultado)
    document.getElementById("resultado").innerHTML = resultado
}

function tabuada(){
    var numer = (document.getElementById("numero").value)
    
    for(let i = 1;i <= 10;i++){
      resultado = numer * i
      console.log(numer, " x " , i, " = ", resultado)
     
    }

document.getElementById("resultado").innerHTML = resultado
}

function somaNumero(){
    let i = 0
    let e = 0
    while(i < 50){
        if((i % 2) == 0){
            i++
            e = i
            resultado = e + e
            console.log(resultado)
        }
        else{
            i++
        }

        console.log(resultado)
    }
    
    console.log(resultado)
    document.getElementById("resultado").innerHTML = resultado
}

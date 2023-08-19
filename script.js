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
    let qtd = 0;
    let soma = 0;
    let i = 0;
    while(qtd < 50){
        i ++;
        if(i % 2 == 0){
            qtd ++;
            soma += i;
            console.log(qtd+": "+i +" + "+(soma-i)+" = "+soma)
        }
    }
}

function primo(){
    var numer = (document.getElementById("numero").value)
    let divisores = 0

        for (let i = 2; i <= Math.sqrt(numer); i++) {
            if (numer % i === 0) {
                divisores++
            }
        }

    if (divisores === 0) {
        console.log(`${numer} é um número primo.`)
    } else {
        console.log(`${numer} não é um número primo.`)
    }
}

function fabo(){
    let termoAtual = 0;
    let proximoTermo = 1;
    let contador = 0;
    var numer = (document.getElementById("numero").value)
    while (contador < numer) {
        console.log(termoAtual);
        let soma = termoAtual + proximoTermo;
        termoAtual = proximoTermo;
        proximoTermo = soma;
        contador++;
    }   
}

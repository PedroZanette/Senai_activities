function verif(){
    var usuario = (document.getElementById("username").value)
    var password = (document.getElementById("senha").value)
    var resultado = 0
    if (password == "123" && usuario == "admin"){
        resultado = "Login efetuado!"
   
    }else if (password != "123" && usuario == "admin") {
        resultado = "Login falhou! Senha incorreta."
            alert(resultado)
    
    }else if (password == "123" && usuario != "admin") {
        resultado = "Login falhou! Usuário incorreto."
            alert(resultado)
     
    }else {
        resultado = "Login falhou! Senha e Usuário incorretos."
            alert(resultado)
     } 
document.getElementById("resultado").innerHTML = resultado
}
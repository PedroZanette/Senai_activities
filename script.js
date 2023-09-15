const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");
let usuarios = [];

function login(){
   let login = campoLogin.value;
   let senha = campoSenha.value;
   let mensagem = "Usuário ou senha incorreta!";
   for(let usuario of usuarios){
        if(usuario.login == login && usuario.senha == senha){
            mensagem = "parabéns, você logou!";
            break;
        }
    }
    alert(mensagem)
}

function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
         login: campoNovoLogin.value,
         senha: campoNovaSenha.value
        }
     usuarios.push(usuario);
     alert("Usuarío cadastrado com sucesso")
    }else{
    alert("As senhas são diferentes!");
  }
}

const nomes = [];
const profissoes = [];
       
function add(){
        const nome = document.getElementById("name").value.toUpperCase();
        const profissao = document.getElementById("job").value.toUpperCase();

        const index = nomes.indexOf(nome);

        if(index == -1){
                nomes.push(nome);
                profissoes.push(profissao);
                atualizarLista();  
        }else {
                alert(`${nome} já existe na lista.`); 
        }
        
}
        
function remove() {
        const nome = document.getElementById("name").value.toUpperCase();
        
        const index = nomes.indexOf(nome);
        
        if (index !== -1) {
                nomes.splice(index, 1);
                profissoes.splice(index, 1);
                alert(`${nome} removido(a) com sucesso.`);
        } else {
               
                alert(`${nome} não encontrado(a).`);
        }
           
        atualizarLista();
}
       
function atualizarLista() {
     const listaPessoas = document.getElementById("listaPessoas");
     listaPessoas.innerHTML = "";
           
     for (let i = 0; i < nomes.length; i++) {
       const item = document.createElement("li");
       item.textContent = `${nomes[i]} - ${profissoes[i]}`;
       listaPessoas.appendChild(item);
     }
}

const usuarios = [];

function validarDados(nome, idade) {
    if (!nome.trim()) {
        return "O nome não pode estar vazio.";
    }
    if (idade < 18) {
        return "Apenas maiores de 18 anos podem se cadastrar.";
    }
    return null; 
}

function processarCadastro(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const mensagemDiv = document.getElementById('mensagem');

    const erro = validarDados(nome, idade);
    if (erro) {
        mensagemDiv.textContent = erro;
        return;
    }
  
    salvarUsuario(nome, idade);
   
    exibirUsuarios();
    mensagemDiv.textContent = "Usuário cadastrado com sucesso!";
}

function salvarUsuario(nome, idade) {
    usuarios.push({ nome, idade });
}

function exibirUsuarios() {
    const listaUsuariosDiv = document.getElementById('listaUsuarios');
    listaUsuariosDiv.innerHTML = "<h2>Usuários Cadastrados:</h2>"; 

    usuarios.forEach((usuario, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
        listaUsuariosDiv.appendChild(p);
    });
}

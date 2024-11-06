
const nome_usuario = document.getElementById("nameUser");
const info_usuario = {
  nome: document.getElementById("name"),
  cor: document.getElementById("cor"),
  idade: document.getElementById("idade"),
};
const button = document.querySelector("button");
const spans = document.querySelectorAll(".span");


class usuario {
  constructor(nomeUsuario) {
    this.nomeUsuario = nomeUsuario;
  }

  mostrarUsuario() {
    console.log(this.nomeUsuario);
  }
}

class usuario extends Usuario {
  constructor(nomeUsuario, nomeUsuario, cor, idade) {
    super(nomeUsuario);
    this.nomeUsuario = nomeUsuario;
    this.cor = cor;
    this.idade = idade;
  }

  mostrarUsuarioConsole() {
    console.log(`O Usuario é o ${this.nomeUsuario}, o Usuario é {
        ${this.nomeUsuario}, da cor ${this.cor} e tem ${this.idade} anos}`);
  }

  exibirAnimal() {
    spans[0].innerText = this.nomeUsuario;
    spans[1].innerText = this.nomeUsuario;
    spans[2].innerText = this.cor;
    spans[3].innerText = this.idade;
  }
}


button.addEventListener("click", () => {

  const Usuario1 = new Usuario(
    nome_usuario.value, 
    info_usuario.nome.value, 
    info_usuario.cor.value, 
    info_usuario.idade.value 
  );
  usuario1.mostrarUsuarioConsole();

  usuario1.exibirUsuario();
});
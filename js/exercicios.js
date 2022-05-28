const nome = 'Felipe';
const sobrenome = 'de Oliveira';
const idade = 26;

console.log(nome, sobrenome, idade);

const usuario = {
  nome: nome,
  sobrenome: sobrenome,
  idade: idade,
};
console.log(usuario);

// somente se o nome da variavel
// e o nome da propriedade
// forem o mesmo
const usuario2 = { nome, sobrenome, idade };
console.log(usuario2);

console.log(usuario.nome, usuario.nome, usuario.nome);

function showMessage(usuario) {
  console.log(
    `IDENTIFICADO ${usuario.nome} ${usuario.sobrenome},
    DE ${usuario.idade} ANOS DE IDADE`
  );
}

showMessage(usuario);

//#region strings
// prettier-ignore
const text1 = "minha frase complexa com caracteres especiais sãç";
console.log('text1', text1);
const text2 = 'Minha outra frase !@#%$%^ç';
console.log('text2', text2);
const text3 = `meu teste
com quebra de linha
e variavel text1 = ${text1}`;
console.log('text3', text3);
//#endregion

//#region numbers
const number1 = 33;
console.log('number1', number1);
const number2 = -56;
console.log('number2', number2);
const number3 = 65.5588;
console.log('number3', number3);
const number4 = -123.221548;
console.log('number4', number4);
// o "e" pode ser considerado um número
const number5 = 1e1;
console.log('number5', number5);
// 0x permite utilizar código hexadecimal
const number6 = 0xff0000;
console.log('number6', number6);
//#endregion

//#region booleans
const boolean1 = true;
console.log('boolean1', boolean1);
const boolean2 = false;
console.log('boolean2', boolean2);
const boolean3 = number1 > number3;
console.log('boolean3', boolean3);
const boolean4 = number1 < number5;
console.log('boolean4', boolean4);
const boolean5 = number1 > number3 && number1 < number2;
console.log('boolean5', boolean5);
const boolean6 = number1 > number3 || number1 < number2;
console.log('boolean6', boolean6);
//#endregion

//#region arrays
const array1 = [];
console.log('array vazio', array1);

const array2 = [2, 4, 6];
console.log('array com dados', array2);

const array3 = ['teste', array1, 2323];
console.log('array com varios tipos de dados', array3);

console.log('pegando o tamanho todal do nosso array2 ', array2.length);
console.log('pegando o primeiro item do array2 ', array2[0]);

const array4 = [2, 4, 6];
array4[1] = 'alterado';
console.log('array4 ', array4);

const array5 = [];
array5.push('meu');
array5.push('nome');
array5.push('é');
array5.push('felipe');
console.log('array5', array5);
//#endregion

//#region json
const object1 = {};
console.log('object1', object1);

const object2 = {
  nome: 'Felipe',
  idade: 26,
};
console.log('object2', object2);

const object3 = {
  nome: 'Felipe',
  idade: 26,
  endereco: {
    rua: 'seila',
    cep: '000000-00',
  },
  contatos: [
    { tipo: 'email', email: 'felipeoliveirasl@hotmail.com' },
    { tipo: 'celular', celular: '+55 (00) 000-000-000' },
  ],
};
console.log(object3);

// acessando valores de um objeto
console.log(object3.contatos[0].tipo);
// criando um valor
object3.apelido = 'lipe';
console.log(object3);
// alterando um valor
object3.contatos[1].tipo = 'whatsapp';
console.log(object3);
//#endregion

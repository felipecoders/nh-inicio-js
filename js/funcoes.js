function hello() {
  console.warn('hello');
}

hello();
hello();
hello();

function hello2(message) {
  console.warn(`hello ${message}`);
}

hello2('world');
hello2('Felipe');
hello2('estranho');

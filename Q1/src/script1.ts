//import PromptSync from 'prompt-sync';
const prompt = require('prompt-sync')();

const cor= prompt('digite a cor do seu patinete: ');
const roda= Number(prompt('digite quantas rodas o seu patinete possui: '));
const modelo= prompt('digite o modelo do patinete: ');

const patinete = new Patinete (
    cor,
    roda,
    modelo,
)
console.log(`o patinete da marca ${modelo} com a cor ${cor}`)
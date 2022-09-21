//import PromptSync from 'prompt-sync';
const prompt = require('prompt-sync')();

import { bank } from "./contaBancaria";

const nome = prompt ('digite seu nome: ');
const cpf= Number(prompt('digite seu cpf: '));
const id= Number(prompt('digite o número da sua conta: '));
const saldo=5000;

console.log(`a conta ${id} do cliente com o cpf ${cpf} possui o saldo de ${saldo}`);
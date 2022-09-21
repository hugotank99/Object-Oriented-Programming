"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import PromptSync from 'prompt-sync';
var prompt = require('prompt-sync')();
var nome = prompt('digite seu nome: ');
var cpf = Number(prompt('digite seu cpf: '));
var id = Number(prompt('digite o número da sua conta: '));
var saldo = 5000;
console.log("a conta ".concat(id, " do cliente com o cpf ").concat(cpf, " possui o saldo de ").concat(saldo));

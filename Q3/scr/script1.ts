const prompt = require ('prompt-sync')();

import { Paciente } from "./pacientes";

const nome = prompt ('digite seu nome: ');
const idade = Number(prompt('digite seu idade: '));
const causaDoAcdt = prompt ('digite a causa: ');


class Paciente{

    public nome: string;
    public idade: number;
    public causaDoAcdt: string;


    constructor (nome, idade, causaDoAcdt){
        this.nome = nome;
        this.idade = idade;
        this.causaDoAcdt = causaDoAcdt;
    }
}
export { Paciente };
class bank {

    public nome: string;
    private saldo: number= 5000;
    private cpf: number;
    private  id: number;

    constructor(nome, saldo, cpf, id) {
        this.nome = nome;
        this.saldo = saldo;
        this.cpf = cpf;
        this.id = id;
    }

}
export { bank };
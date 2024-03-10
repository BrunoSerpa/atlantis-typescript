import Prototipo from "../interfaces/prototipo"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente implements Prototipo{
    private nome: string
    private nomeSocial!: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string | undefined, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Titular(cliente: Cliente)  {this.titular = cliente}
    clonar(): Prototipo {
        let cliente = new Cliente(this.nome, this.nomeSocial, this.dataNascimento)
        cliente.dataCadastro = this.dataCadastro
        cliente.telefones = this.telefones
        cliente.endereco = this.endereco
        cliente.documentos = this.documentos
        cliente.dependentes = this.dependentes
        return cliente
    }
}
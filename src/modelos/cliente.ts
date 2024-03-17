import Prototipo from "../interfaces/prototipo"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente implements Prototipo{
    private nome: string
    private nomeSocial: string | undefined
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

    public set Nome(nome:string) { this.nome =  nome}
    public set NomeSocial(nomeSocial : string | undefined) { this.nomeSocial = nomeSocial }
    public set DataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    public set DataCadastro(dataCadastro: Date) { this.dataCadastro = dataCadastro}
    public set Telefones(telefones: Telefone[]) { this.telefones = telefones }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Documentos(documentos: Documento[])  {this.documentos = documentos}
    public set Dependentes(dependentes: Cliente[])  {this.dependentes = dependentes}
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
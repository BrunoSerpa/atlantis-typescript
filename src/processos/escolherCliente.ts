import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class EscolherCliente extends Processo {
    private clientes: Cliente[]
    private nomeCliente: String
    private impressor!: Impressor
    private clienteDesejado: Cliente
    private titularOuDependente: Boolean
    constructor(nomeCliente: String, titularOuDependente: Boolean) {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.nomeCliente=nomeCliente
        this.titularOuDependente = titularOuDependente
    }
    
    private get encontrarTitular(): Cliente[]{
        const clientesEncontrados = []
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)){
                if (cliente.Nome.toUpperCase() === this.nomeCliente || (cliente.NomeSocial && cliente.NomeSocial.toUpperCase() === this.nomeCliente)){
                    clientesEncontrados.push(cliente)
                }
            }
        })
        return clientesEncontrados
    }

    private get encontrarDependente(): Cliente[]{
        const clientesEncontrados = []
        this.clientes.forEach(cliente => {
            if (!this.titular(cliente)){
                if (cliente.Nome.toUpperCase() === this.nomeCliente || (cliente.NomeSocial && cliente.NomeSocial.toUpperCase() === this.nomeCliente)){
                    clientesEncontrados.push(cliente)
                }
            }
        })
        return clientesEncontrados
    }
    processar(): Cliente {
        let clientesEncontrados:Cliente[] = []
        if (this.titularOuDependente){
            clientesEncontrados = this.encontrarTitular
        } else {
            clientesEncontrados = this.encontrarDependente
        }
        console.log(clientesEncontrados)
        if (clientesEncontrados.length > 1) {
            while (true){
                console.clear()
                console.log(`Mais de um cliente encontrado`)
                console.log(`****************************`)
                console.log(`| Por favor, selecione uma opção...`)
                console.log(`----------------------`)
                console.log(`| Opções para cliente:`)
                clientesEncontrados.forEach((cliente, index) => {
                    console.log(`${index + 1} - Cliente:`)
                    this.impressor = new ImpressorCliente(cliente)
                    console.log(this.impressor.imprimir())
                })
                let clienteDesejado = this.entrada.receberNumero("Qual cliente desejado?")
                if (clienteDesejado > 0 && clientesEncontrados.length >= clienteDesejado) {
                    this.clienteDesejado = clientesEncontrados[clienteDesejado - 1]
                } else {
                    console.log('Opção inválida! :(')
                    continue
                }
                break
            }

        } else if (clientesEncontrados.length === 1) {
            this.clienteDesejado = clientesEncontrados[0]
        } else {
            console.log('Cliente não encontrado! :(')
        }
        return this.clienteDesejado
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}
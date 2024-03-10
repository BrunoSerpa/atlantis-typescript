import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorDependentes from "../impressores/impressorDependentes";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nomeCliente = this.entrada.receberTexto("Insira o nome/nome social do cliente titular: ").toUpperCase()
        let clientesEncontrados: Array<Cliente> = []
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                if (cliente.Nome.toUpperCase() === nomeCliente || (cliente.NomeSocial && cliente.NomeSocial.toUpperCase() === nomeCliente)) {
                    clientesEncontrados.push(cliente)
                }
            }
        })
        if (clientesEncontrados.length > 1) {
            console.log(`Mais de um cliente encontrado`)
            this.opcao = this.entrada.receberNumero('Qual cliente você deseja?')
            clientesEncontrados.forEach((cliente, index) => {
                console.log(`${index + 1} - Cliente:`)
                this.impressor = new ImpressorCliente(cliente)
                console.log(this.impressor.imprimir())
            })
            let clienteDesejado = this.entrada.receberNumero("Qual cliente titular deseja ver os dependentes?")
            if (clienteDesejado > 0 && clientesEncontrados.length >= clienteDesejado) {
                console.log('Iniciando a listagem dos clientes depentes...')
                this.impressor = new ImpressorDependentes(clientesEncontrados[clienteDesejado - 1].Dependentes)
                console.log(this.impressor.imprimir())
            } else {
                console.log('Opção inválida! :(')
            }
        } else if (clientesEncontrados.length === 1) {
            console.log('Iniciando a listagem dos clientes depentes...')
            this.impressor = new ImpressorDependentes(clientesEncontrados[0].Dependentes)
        } else {
            console.log('Cliente titular não encontrado! :(')
        }
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}
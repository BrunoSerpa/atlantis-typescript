import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"
import Impressor from "../interfaces/impressor"
import MenuTipoEditarClienteDependente from "../menus/menuTipoEditarClienteDependente"
import Cliente from "../modelos/cliente"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"
import EditarDocumentos from "./editarDocumentos"
import EscolherCliente from "./escolherCliente"
import PreferenciaNomeSocial from "./preferenciaNomeSocial"
import _ from "lodash";

// Seu código aqui...


export default class EditarClienteDependente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditarClienteDependente()
    }
    private impressor: Impressor
    processar(): void {
        let nomeCliente = this.entrada.receberTexto("Insira o nome/nome social do cliente dependente: ").toUpperCase()
        let escolherCliente = new EscolherCliente(nomeCliente, false)
        let clienteDesejado = escolherCliente.processar()
        if (clienteDesejado) {
            let novoCliente = new Cliente(
                clienteDesejado.Nome,
                clienteDesejado.NomeSocial,
                clienteDesejado.DataCadastro
            )
            novoCliente.DataNascimento = clienteDesejado.DataNascimento
            let titularNovoCliente = (clienteDesejado.Titular.clonar() as Cliente)
            this.adicionandoTitular(novoCliente, titularNovoCliente)
            novoCliente.Documentos = clienteDesejado.Documentos
            while (true) {
                console.log("Dados atuais do cliente")
                this.impressor = new ImpressorCliente(novoCliente)
                console.log(this.impressor.imprimir())
                this.menu.mostrar()
                let opcao = this.entrada.receberNumero('Qual opção desejada?')
                switch (opcao) {
                    case 1:
                        novoCliente.Nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
                        novoCliente.NomeSocial = new PreferenciaNomeSocial().processar()
                        break
                    case 2:
                        novoCliente.DataNascimento = this.entrada.receberData('Qual a data de nascimento?')
                        break
                    case 3:
                        this.processo = new EditarDocumentos(novoCliente)
                        this.processo.processar()
                        break
                    case 4:
                        let titularDesejado = this.entrada.receberTexto("Insira o nome/nome social do cliente titular: ").toUpperCase()
                        let escolherCliente = new EscolherCliente(titularDesejado, true)
                        let novoTitular = escolherCliente.processar()
                        if (novoTitular) {
                            if (_.isEqual(novoTitular, titularNovoCliente)) {
                                console.log("Você inseriu o titular atual! :(")
                            } else {
                                this.trocarTitular(
                                    titularNovoCliente,
                                    novoTitular,
                                    clienteDesejado
                                )
                                this.adicionandoTitular(novoCliente, titularNovoCliente)
                            }
                        }
                }
                const resposta = this.entrada.receberResposta("Deseja trocar mais algum dado? (S/N)")
                if (resposta == 'S') {
                    continue
                }
                break
            }
            const clientesEditado: Cliente[] = []
            Armazem.InstanciaUnica.Clientes.forEach(cliente => {
                if (_.isEqual(cliente, clienteDesejado)) {
                    cliente = novoCliente
                }
                clientesEditado.push(cliente)
            })
            Armazem.InstanciaUnica.Clientes = clientesEditado
        }
    }

    private trocarTitular(
        titularAntigo: Cliente,
        novoTitular: Cliente,
        antigoDependente: Cliente
    ) {
        const clientesEditado: Cliente[] = []
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (_.isEqual(cliente, titularAntigo)) {
                cliente.Dependentes = cliente.Dependentes.filter(dependente => dependente != antigoDependente)
            } else if (_.isEqual(cliente, novoTitular)) {
                cliente.Dependentes.push(antigoDependente)
            }
            clientesEditado.push(cliente)
        })
        Armazem.InstanciaUnica.Clientes = clientesEditado
    }

    private adicionandoTitular(dependente: Cliente, titular: Cliente) {
        dependente.Titular = titular
        dependente.Endereco = (titular.Endereco.clonar() as Endereco)
        titular.Telefones.forEach(telefone => {
            dependente.Telefones.push((telefone.clonar() as Telefone))
        });
    }
}
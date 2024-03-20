import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorDependente from "../impressores/impressorDependente";
import MenuEditarDependentes from "../menus/menuEditarDependentes";
import Cliente from "../modelos/cliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroDependente from "./cadastroDependente";

export default class EditarDependentes extends Processo {
    private dependentes: Cliente[]
    private clienteTitular: Cliente
    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuEditarDependentes()
        this.clienteTitular = cliente
        this.dependentes = cliente.Dependentes
    }

    processar(): Cliente[] {
        while (true) {
            console.clear()
            console.log("Dependentes Atuais")
            this.listarDependentes(this.dependentes)
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (opcao) {
                case 1:
                    this.processo = new CadastroClienteDependente(this.clienteTitular)
                    this.processo.processar()
                    break
                case 2:
                    console.clear()
                    this.listarDependentes(this.dependentes)
                    opcao = this.entrada.receberNumero('Qual Dependente deseja editar?')
                    if (opcao > 0 && opcao <= this.dependentes.length) {
                        let dependenteEditado = new CadastroDependente(this.clienteTitular).processar()
                        this.arrumandoArmazem(
                            this.dependentes[opcao - 1],
                            dependenteEditado
                        )
                        this.dependentes[opcao - 1] = dependenteEditado
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 3:
                    console.clear()
                    this.listarDependentes(this.dependentes)
                    opcao = this.entrada.receberNumero('Qual Dependente deseja excluir?')
                    if (opcao > 0 && opcao <= this.dependentes.length) {
                        this.arrumandoArmazem(
                            this.dependentes[opcao - 1],
                            undefined
                        )
                        this.dependentes = this.dependentes.filter(dependente => dependente !== this.dependentes[opcao - 1])
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 0:
                    break
                default:
                    console.log('Opção inválida! :(')
            }

            if (opcao !== 0) {
                const resposta = this.entrada.receberResposta("Deseja trocar mais algum Dependente? (S/N)")
                if (resposta === 'S') {
                    continue
                }
            }
            break
        }
        return this.dependentes
    }
    private listarDependentes(dependentes: Cliente[]): void {
        if (dependentes.length >= 1) {
            dependentes.forEach((dependente, index) => {
                console.log(`${index + 1} - Dependente: \n${new ImpressorDependente(dependente).imprimir()}`)
            })
        } else {
            console.log('Nenhum Dependente')
        }
    }
    private arrumandoArmazem(dependenteAnterior: Cliente, novoDependente: Cliente | undefined) {
        let armazemDependenteCerto: Cliente[] = []

        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (cliente !== dependenteAnterior) {
                armazemDependenteCerto.push(cliente)
            } else {
                if (novoDependente !== undefined) {
                    armazemDependenteCerto.push(novoDependente)
                }
            }
        })
        Armazem.InstanciaUnica.Clientes = armazemDependenteCerto
    }
}
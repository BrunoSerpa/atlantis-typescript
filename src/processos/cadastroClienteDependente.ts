import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private clienteTitular: Cliente

    constructor(cliente: Cliente) {
        super()
        this.clienteTitular = cliente
    }
    private resposta: String
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')

        const nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        const nomeSocial = this.receberPreferenciaNomeSocial
        const dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        cliente.Titular = ( this.clienteTitular.clonar() as Cliente)
        cliente.Endereco =( this.clienteTitular.Endereco.clonar() as Endereco)
        this.clienteTitular.Telefones.forEach(telefone => {
            cliente.Telefones.push((telefone.clonar() as Telefone))
        });
        this.resposta = this.entrada.receberResposta('Deseja cadastrar um documento?')
        if (this.resposta === "S") {
            while (true) {
                this.processo = new CadastrarDocumentosCliente(cliente)
                this.processo.processar()
                this.resposta = this.entrada.receberResposta('Deseja cadastrar mais algum documento?')
                if (this.resposta === "S") {
                    continue
                }
                break
            }
        }
        this.clienteTitular.Dependentes.push(cliente)
        console.log('Finalizando o cadastro do cliente...')
    }
    private get receberPreferenciaNomeSocial(): string | undefined {
        this.resposta = this.entrada.receberResposta("Prefere ser chamado pelo nome social? (S/N): ")
        if (this.resposta === "S") {
            return this.entrada.receberTexto("Por favor, informe o nome social do cliente: ")
        } else if (this.resposta === "N") {
            return
        }
    }
}
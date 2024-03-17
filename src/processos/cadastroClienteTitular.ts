import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTelefoneTitular from "./cadastroTelefoneTitular";
import PreferenciaNomeSocial from "./preferenciaNomeSocial";

export default class CadastroClienteTitular extends Processo {
    private resposta: String
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        const nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        const nomeSocial = new PreferenciaNomeSocial().processar()
        const dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        const cliente = new Cliente(nome, nomeSocial, dataNascimento)
        this.resposta = this.entrada.receberResposta('Deseja cadastrar um número de telefone?')
        if (this.resposta === "S") {
            while (true) {
                this.processo = new CadastroTelefoneTitular(cliente)
                this.processo.processar()
                this.resposta = this.entrada.receberResposta('Deseja cadastrar mais algum número de telefone?')
                if (this.resposta === "S") {
                    continue
                }
                break
            }
        }
        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()
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
        this.resposta = this.entrada.receberResposta('Deseja cadastrar um dependente?')
        if (this.resposta === "S") {
            while (true) {
                this.processo = new CadastroClienteDependente(cliente)
                this.processo.processar()
                this.resposta = this.entrada.receberResposta('Deseja cadastrar mais algum dependente?')
                if (this.resposta === "S") {
                    continue
                }
                break
            }
        }
        const armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)
        console.log('Finalizando o cadastro do cliente...')
    }
}
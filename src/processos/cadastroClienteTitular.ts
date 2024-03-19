import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import CadastrarDocumento from "./cadastrarDocumento";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTelefone from "./cadastroTelefone";
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
                cliente.Telefones.push(new CadastroTelefone().processar())
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
                new MenuTipoDocumento().mostrar()
                let opcao = this.entrada.receberNumero('Qual opção desejada?');
                if ([1, 2, 3].includes(opcao)) {
                    cliente.Documentos.push(new CadastrarDocumento(opcao).processar());
                } else if (opcao === 0) {
                    break;
                } else {
                    console.log('Opção não entendida :(');
                }
                this.resposta = this.entrada.receberResposta('Deseja cadastrar mais algum documento? (S/N)');
                if (this.resposta !== "S") {
                    break;
                }
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
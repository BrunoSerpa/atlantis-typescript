import Processo from "../abstracoes/processo";
import MenuEditarDocumentos from "../menus/menuEditarDocumentos";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import CadastrarDocumento from "./cadastrarDocumento";
import PreferenciaNomeSocial from "./preferenciaNomeSocial";

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
        const nomeSocial = new PreferenciaNomeSocial().processar()
        const dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        cliente.Titular = (this.clienteTitular.clonar() as Cliente)
        cliente.Endereco = (this.clienteTitular.Endereco.clonar() as Endereco)
        this.clienteTitular.Telefones.forEach(telefone => {
            cliente.Telefones.push((telefone.clonar() as Telefone))
        });
        this.resposta = this.entrada.receberResposta('Deseja cadastrar um documento?')
        if (this.resposta === "S") {
            while (true) {
                new MenuEditarDocumentos().mostrar()
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
        this.clienteTitular.Dependentes.push(cliente)
        console.log('Finalizando o cadastro do cliente...')
    }
}
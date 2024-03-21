import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorDependentes from "../impressores/impressorDependentes";
import Impressor from "../interfaces/impressor";
import MenuTipoEditarClienteTitular from "../menus/menuTipoEditarClienteTitular";
import Cliente from "../modelos/cliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import EditarDependentes from "./editarDependentes";
import EditarDocumentos from "./editarDocumentos";
import EditarTelefones from "./editarTelefones";
import EscolherCliente from "./escolherCliente";
import PreferenciaNomeSocial from "./preferenciaNomeSocial";

export default class EditarClienteTitular extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.menu = new MenuTipoEditarClienteTitular()
    }

    private impressor: Impressor
    processar(): void {
        let nomeCliente = this.entrada.receberTexto("Insira o nome/nome social do cliente titular: ").toUpperCase()
        let escolherCliente = new EscolherCliente(nomeCliente, true)
        let clienteDesejado = escolherCliente.processar()
        if (clienteDesejado) {
            let novoCliente = new Cliente(
                clienteDesejado.Nome,
                clienteDesejado.NomeSocial,
                clienteDesejado.DataCadastro
            )
            novoCliente.DataNascimento = clienteDesejado.DataNascimento
            novoCliente.Telefones = clienteDesejado.Telefones
            novoCliente.Endereco = clienteDesejado.Endereco
            novoCliente.Documentos = clienteDesejado.Documentos
            novoCliente.Dependentes = clienteDesejado.Dependentes
            while (true) {
                console.log("Dados atuais do cliente:")
                this.impressor = new ImpressorCliente(novoCliente)
                console.log(this.impressor.imprimir())
                this.impressor = new ImpressorDependentes(novoCliente.Dependentes)
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
                        novoCliente.Telefones = new EditarTelefones(novoCliente).processar()
                        break
                    case 4:
                        this.processo = new CadastroEnderecoTitular(novoCliente)
                        this.processo.processar()
                        break
                    case 5:
                        this.processo = new EditarDocumentos(novoCliente)
                        this.processo.processar()
                        break
                    case 6:
                        this.processo = new EditarDependentes(novoCliente)
                        this.processo.processar()
                        break
                }
                const resposta = this.entrada.receberResposta("Deseja trocar mais algum dado? (S/N)")
                if (resposta == 'S') {
                    continue
                }
                break
            }
            const clientesEditado: Cliente[] = []
            Armazem.InstanciaUnica.Clientes.forEach(cliente => {
                if (cliente === clienteDesejado) {
                    cliente = novoCliente
                }
                clientesEditado.push(cliente)
            })
            Armazem.InstanciaUnica.Clientes = clientesEditado
        }
    }
}
import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import EscolherCliente from "./escolherCliente";
import Principal from "./principal";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                let nomeTitular = this.entrada.receberTexto("Insira o nome/nome social do cliente titular: ").toUpperCase()
                let clienteDesejado = new EscolherCliente(nomeTitular, true).processar()
                if (clienteDesejado) {
                    this.processo = new CadastroClienteDependente(clienteDesejado)
                    this.processo.processar()
                }
                break
            case 0:
                console.clear()
                this.processo = new Principal()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}
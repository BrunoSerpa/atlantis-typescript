import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import EscolherCliente from "./escolherCliente";

export default class ExcluirClienteDependent extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nomeCliente = this.entrada.receberTexto("Insira o nome/nome social do cliente dependente: ").toUpperCase()
        let escolherCliente = new EscolherCliente(nomeCliente, false)
        let clienteDesejado = escolherCliente.processar()
        if (clienteDesejado){
            const confirmacao = this.entrada.receberResposta(`Tem certeza que deseja excluir o cliente dependente ${clienteDesejado.Nome}`)
            if (confirmacao === "S"){
                this.clientes=(this.clientes.filter(cliente => cliente != clienteDesejado))
                Armazem.InstanciaUnica.Clientes = this.clientes
            }
        }
    }
}
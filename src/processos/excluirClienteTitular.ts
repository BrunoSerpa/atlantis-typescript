import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import EscolherCliente from "./escolherCliente";

export default class ExcluirClienteTitular extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nomeCliente = this.entrada.receberTexto("Insira o nome/nome social do cliente titular: ").toUpperCase()
        let escolherCliente = new EscolherCliente(nomeCliente, true)
        let clienteDesejado = escolherCliente.processar()
        if (clienteDesejado){
            const confirmacao = this.entrada.receberResposta(`Tem certeza que deseja excluir o cliente ${clienteDesejado.Nome} e os seus ${clienteDesejado.Dependentes.length} dependentes? (S/N): `)
            if (confirmacao === "S"){
                this.clientes=(this.clientes.filter(cliente => cliente != clienteDesejado))
                this.clientes=(this.clientes.filter(cliente => cliente.Titular != clienteDesejado))
                Armazem.InstanciaUnica.Clientes = this.clientes
            }
        }
    }
}
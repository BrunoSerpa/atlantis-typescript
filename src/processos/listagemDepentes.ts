import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorDependentes from "../impressores/impressorDependentes";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import EscolherCliente from "./escolherCliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
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
            this.impressor = new ImpressorDependentes(clienteDesejado.Dependentes)
            console.log(this.impressor.imprimir())
        }
    }
}
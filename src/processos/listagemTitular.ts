import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorDependentes from "../impressores/impressorDependentes";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import EscolherCliente from "./escolherCliente";

export default class ListagemTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
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
            this.impressor = new ImpressorCliente(clienteDesejado.Titular)
            console.log(this.impressor.imprimir())
            this.impressor = new ImpressorDependentes(clienteDesejado.Titular.Dependentes)
            console.log(this.impressor.imprimir())
        }
    }
}
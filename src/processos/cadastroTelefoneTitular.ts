import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de telefone...')
        const ddd = this.entrada.receberTexto('Qual o ddd?')
        const numero = this.entrada.receberTexto('Qual o número?')
        const telefone = new Telefone(ddd, numero)
        this.cliente.Telefones.push(telefone)
    }

}
import Processo from "../abstracoes/processo";
import Telefone from "../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private telefone: Telefone

    constructor() {
        super()
    }

    processar(): Telefone {
        const ddd = this.entrada.receberTexto('Qual o ddd?')
        const numero = this.entrada.receberTexto('Qual o número?')
        this.telefone = new Telefone(ddd, numero)
        return this.telefone
    }
}
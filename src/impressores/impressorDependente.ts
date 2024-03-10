import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorDependente implements Impressor {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `| Dependente:\n`
        + `| Nome: ${this.cliente.Nome}\n`
        + `| Nome social: ${this.cliente.NomeSocial}\n`
        + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
        + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`
        return impressao
    }

}
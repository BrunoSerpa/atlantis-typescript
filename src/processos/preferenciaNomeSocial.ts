import Processo from "../abstracoes/processo";
export default class PreferenciaNomeSocial extends Processo {
    constructor() {
        super()
    }
    private get receberPreferenciaNomeSocial(): string | undefined {
        const resposta = this.entrada.receberResposta("Prefere ser chamado pelo nome social? (S/N): ")
        if (resposta === "S") {
            return this.entrada.receberTexto("Por favor, informe o nome social do cliente: ")
        } else if (resposta === "N") {
            return undefined
        }
    }

    processar(): string | undefined{
        return this.receberPreferenciaNomeSocial
    }
}
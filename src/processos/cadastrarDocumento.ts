import Processo from "../abstracoes/processo";
import Documento from "../modelos/documento";
import CadastroCpf from "./cadastroCpf";
import CadastroPassaporte from "./cadastroPassaporte";
import CadastroRg from "./cadastroRg";

export default class CadastrarDocumento extends Processo {
    constructor(opcao: number) {
        super()
        this.opcao = opcao
    }

    processar(): Documento {
        if (this.opcao === 1) {
            return new CadastroCpf().processar()
        } else if (this.opcao === 2) {
            return new CadastroRg().processar()
        } else {
            return new CadastroPassaporte().processar()
        }
    }
}
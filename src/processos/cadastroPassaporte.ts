import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Documento from "../modelos/documento";

export default class CadastroPassaporte extends Processo {

    processar(): Documento {
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        return new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
    }
}
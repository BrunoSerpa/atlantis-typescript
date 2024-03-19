import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import ImpressorDocumento from "../impressores/impressorDocumento";
import MenuEditarDocumentos from "../menus/menuEditarDocumentos";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastrarDocumento from "./cadastrarDocumento";

export default class EditarDocumentos extends Processo {
    private Documentos: Documento[]

    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuEditarDocumentos()
        this.Documentos = cliente.Documentos
    }

    processar(): Documento[] {
        while (true) {
            console.clear()
            console.log("Documentos Atuais")
            this.listarDocumento(this.Documentos)
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (opcao) {
                case 1:
                    while (true) {
                        new MenuTipoDocumento().mostrar()
                        let opcao = this.entrada.receberNumero('Qual opção desejada?');
                        if ([1, 2, 3].includes(opcao)) {
                            this.Documentos.push(new CadastrarDocumento(opcao).processar());
                        } else if (opcao === 0) {
                            break;
                        } else {
                            console.log('Opção não entendida :(');
                        }
                        let resposta = this.entrada.receberResposta('Deseja cadastrar mais algum documento? (S/N)');
                        if (resposta !== "S") {
                            break;
                        }
                    }
                    break
                case 2:
                    console.clear()
                    this.listarDocumento(this.Documentos)
                    opcao = this.entrada.receberNumero('Qual documento desejada editar?')
                    if (opcao > 0 && opcao <= this.Documentos.length) {
                        let tipoDesejado = this.Documentos[opcao - 1].Tipo
                        let tipoDocumento =
                            tipoDesejado === 'Cadastro de Pessoas Física' ? 1 :
                                tipoDesejado === 'Registro Geral' ? 2 :
                                    3
                        this.Documentos[opcao - 1] = new CadastrarDocumento(tipoDocumento).processar()
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 3:
                    console.clear()
                    this.listarDocumento(this.Documentos)
                    opcao = this.entrada.receberNumero('Qual documento desejada excluir?')
                    if (opcao > 0 && opcao <= this.Documentos.length) {
                        this.Documentos = this.Documentos.filter(Documento => Documento != this.Documentos[opcao - 1])
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 0:
                    break
                default:
                    console.log('Opção inválida! :(')
            }
            if (opcao != 0) {
                const resposta = this.entrada.receberResposta("Deseja trocar mais algum Documento? (S/N)")
                if (resposta == 'S') {
                    continue
                }
            }
            break
        }
        return this.Documentos
    }
    private listarDocumento(Documentos: Documento[]) {
        if (Documentos.length >= 1) {
            Documentos.forEach((Documento, index) => {
                console.log(`${index + 1} - Documento: \n${new ImpressorDocumento(Documento).imprimir()}`)
            })
        } else {
            console.log('Nenhum Documento')
        }
    }
}
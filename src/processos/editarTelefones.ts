import Processo from "../abstracoes/processo";
import ImpressorTelefone from "../impressores/impressorTelefone";
import MenuEditarTelefones from "../menus/menuEditarTelefones";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";
import CadastroTelefone from "./cadastroTelefone";

export default class EditarTelefones extends Processo {
    private telefones: Telefone[]

    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuEditarTelefones()
        this.telefones = cliente.Telefones
    }

    processar(): Telefone[] {
        while (true) {
            console.clear()
            console.log("Telefones Atuais")
            this.listarTelefone(this.telefones)
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (opcao) {
                case 1:
                    this.telefones.push(new CadastroTelefone().processar())
                    break
                case 2:
                    console.clear()
                    this.listarTelefone(this.telefones)
                    opcao = this.entrada.receberNumero('Qual telefone desejada editar?')
                    if (opcao > 0 && opcao <= this.telefones.length) {
                        this.telefones[opcao - 1] = new CadastroTelefone().processar()
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 3:
                    console.clear()
                    this.listarTelefone(this.telefones)
                    opcao = this.entrada.receberNumero('Qual telefone desejada excluir?')
                    if (opcao > 0 && opcao <= this.telefones.length) {
                        this.telefones = this.telefones.filter(telefone => telefone != this.telefones[opcao -1 ])
                    } else {
                        console.log('Opção inválida! :(')
                    }
                    break
                case 0:
                    break
                default:
                    console.log('Opção inválida! :(')
            }
            if (opcao !=0){
                const resposta = this.entrada.receberResposta("Deseja trocar mais algum telefone? (S/N)")
                if (resposta == 'S') {
                    continue
                }
            }
            break
        }
        return this.telefones
    }
    private listarTelefone(telefones: Telefone[]) {
        if (telefones.length >= 1) {
            telefones.forEach((telefone, index) => {
                console.log(`${index + 1} - Telefone: \n${new ImpressorTelefone(telefone).imprimir()}`)
            })
        } else {
            console.log('Nenhum telefone')
        }
    }
}
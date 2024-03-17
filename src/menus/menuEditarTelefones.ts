import Menu from "../interfaces/menu";

export default class MenuEditarTelefones implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que deseja fazer com os telefones? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar mais um telefone`)
        console.log(`| 2 - Editar um telefone existente`)
        console.log(`| 3 - Excluir um telefone existente`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}
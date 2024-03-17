import Menu from "../interfaces/menu";

export default class MenuEditarDependentes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| O que deseja fazer com os dependentes? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar mais um dependente`)
        console.log(`| 2 - Editar um dependente existente`)
        console.log(`| 3 - Excluir um dependente existente`)
        console.log(`----------------------`)
    }
}
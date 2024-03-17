import Menu from "../interfaces/menu";

export default class MenuEditarDocumentos implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que deseja fazer com os documentos? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar mais um documento`)
        console.log(`| 2 - Editar um documento existente`)
        console.log(`| 3 - Excluir um documento existente`)
        console.log(`----------------------`)
    }
}
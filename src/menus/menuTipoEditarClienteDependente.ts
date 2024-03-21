import Menu from "../interfaces/menu";

export default class MenuTipoEditarClienteDependente implements Menu {
    mostrar(): void {
        
        console.log(`****************************`)
        console.log(`| Qual o tipo do dado para editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome e Nome Social`)
        console.log(`| 2 - Data Nascimento`)
        console.log(`| 3 - Documentos`)
        console.log(`| 4 - Titular`)
        console.log(`| 0 - Voltar para o menu`)
        console.log(`----------------------`)
    }
}
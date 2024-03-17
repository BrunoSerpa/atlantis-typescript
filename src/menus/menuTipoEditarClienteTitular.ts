import Menu from "../interfaces/menu";

export default class MenuTipoEditarClienteTitular implements Menu {
    mostrar(): void {
        
        console.log(`****************************`)
        console.log(`| Qual o tipo do dado para editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome e Nome Social`)
        console.log(`| 2 - Data Nascimento`)
        console.log(`| 3 - Telefones`)
        console.log(`| 4 - Endereco`)
        console.log(`| 5 - Documentos`)
        console.log(`| 6 - Dependentes`)
        console.log(`| 0 - Voltar para o menu`)
        console.log(`----------------------`)
    }
}
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Principal from "../processos/principal";
import { clientesTestes } from "./clientesTestes";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

const armazem = Armazem.InstanciaUnica
clientesTestes.forEach(cliente => {
    armazem.Clientes.push(cliente)
});

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}
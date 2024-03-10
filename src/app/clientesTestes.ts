import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let clientesTestes: Array<Cliente> = []

let cliente1 = new Cliente("Mateus Serpa",undefined,new Date(2005,2,10))
cliente1.Documentos.push(new Documento("1111111111111",TipoDocumento.RG, new Date(2030,11,11)))
cliente1.Documentos.push(new Documento("2222222222222",TipoDocumento.CPF, new Date(2025,12,1)))
cliente1.Documentos.push(new Documento("3333333333333",TipoDocumento.Passaporte, new Date(2015,12,1)))
cliente1.Endereco = new Endereco('Rua 1', "Bairro 1", "Cidade 1", "Estado 1", "Pais 1", "CodigoPostal 1")
cliente1.Telefones.push(new Telefone('12', "988998899"))
cliente1.Telefones.push(new Telefone('43', "912345678"))

let cliente2 = new Cliente("Ana Silva", undefined, new Date(1990, 5, 15));
cliente2.Documentos.push(new Documento("4444444444444", TipoDocumento.RG, new Date(2035, 7, 20)));
cliente2.Documentos.push(new Documento("5555555555555", TipoDocumento.CPF, new Date(2022, 8, 5)));
cliente2.Endereco = new Endereco('Rua 2', "Bairro 2", "Cidade 2", "Estado 2", "Pais 2", "CodigoPostal 2");
cliente2.Telefones.push(new Telefone('55', "987654321"));
cliente2.Telefones.push(new Telefone('11', "912345678"));

let cliente3 = new Cliente("Maria Santos", undefined, new Date(1985, 9, 20));
cliente3.Documentos.push(new Documento("6666666666666", TipoDocumento.RG, new Date(2040, 3, 10)));
cliente3.Documentos.push(new Documento("7777777777777", TipoDocumento.CPF, new Date(2019, 10, 3)));
cliente3.Endereco = new Endereco('Rua 3', "Bairro 3", "Cidade 3", "Estado 3", "Pais 3", "CodigoPostal 3");
cliente3.Telefones.push(new Telefone('21', "998877665"));
cliente3.Telefones.push(new Telefone('77', "923456789"));

let cliente4 = new Cliente("Pedro Oliveira", undefined, new Date(1982, 7, 25));
cliente4.Documentos.push(new Documento("8888888888888", TipoDocumento.RG, new Date(2038, 9, 15)));
cliente4.Documentos.push(new Documento("9999999999999", TipoDocumento.CPF, new Date(2010, 4, 30)));
cliente4.Endereco = new Endereco('Rua 4', "Bairro 4", "Cidade 4", "Estado 4", "Pais 4", "CodigoPostal 4");
cliente4.Telefones.push(new Telefone('32', "987654321"));
cliente4.Telefones.push(new Telefone('44', "911223344"));

let cliente5 = new Cliente("Juliana Pereira", "Ana", new Date(1995, 11, 8));
cliente5.Documentos.push(new Documento("1010101010101", TipoDocumento.RG, new Date(2045, 2, 28)));
cliente5.Documentos.push(new Documento("1212121212121", TipoDocumento.CPF, new Date(2023, 6, 17)));
cliente5.Endereco = new Endereco('Rua 5', "Bairro 5", "Cidade 5", "Estado 5", "Pais 5", "CodigoPostal 5");
cliente5.Telefones.push(new Telefone('91', "998877665"));
cliente5.Telefones.push(new Telefone('99', "923456789"));

let cliente6 = new Cliente("Lucas Souza", "Mateus Serpa", new Date(1978, 4, 12));
cliente6.Documentos.push(new Documento("1313131313131", TipoDocumento.RG, new Date(2042, 8, 10)));
cliente6.Documentos.push(new Documento("1414141414141", TipoDocumento.CPF, new Date(2018, 11, 22)));
cliente6.Endereco = new Endereco('Rua 6', "Bairro 6", "Cidade 6", "Estado 6", "Pais 6", "CodigoPostal 6");
cliente6.Telefones.push(new Telefone('81', "987654321"));
cliente6.Telefones.push(new Telefone('88', "911223344"));

let cliente7 = new Cliente("Fernanda Lima", undefined, new Date(1989, 2, 28));
cliente7.Documentos.push(new Documento("1515151515151", TipoDocumento.RG, new Date(2048, 7, 5)));
cliente7.Documentos.push(new Documento("1616161616161", TipoDocumento.CPF, new Date(2015, 9, 9)));
cliente7.Endereco = new Endereco('Rua 7', "Bairro 7", "Cidade 7", "Estado 7", "Pais 7", "CodigoPostal 7");
cliente7.Telefones.push(new Telefone('71', "998877665"));
cliente7.Telefones.push(new Telefone('79', "923456789"));

let cliente8 = new Cliente("Rafaela Costa", undefined, new Date(1992, 8, 17));
cliente8.Documentos.push(new Documento("1717171717171", TipoDocumento.RG, new Date(2050, 5, 20)));
cliente8.Documentos.push(new Documento("1818181818181", TipoDocumento.CPF, new Date(2013, 3, 15)));
cliente8.Endereco = new Endereco('Rua 8', "Bairro 8", "Cidade 8", "Estado 8", "Pais 8", "CodigoPostal 8");
cliente8.Telefones.push(new Telefone('61', "987654321"));
cliente8.Telefones.push(new Telefone('66', "911223344"));

let cliente9 = new Cliente("Gustavo Rodrigues", 'Gustavo', new Date(1987, 10, 3));
cliente9.Documentos.push(new Documento("1919191919191", TipoDocumento.RG, new Date(2043, 12, 30)));
cliente9.Documentos.push(new Documento("2020202020202", TipoDocumento.CPF, new Date(2011, 2, 8)));
cliente9.Endereco = new Endereco('Rua 9', "Bairro 9", "Cidade 9", "Estado 9", "Pais 9", "CodigoPostal 9");
cliente9.Telefones.push(new Telefone('51', "998877665"));
cliente9.Telefones.push(new Telefone('55', "923456789"));

let cliente10 = new Cliente("Patricia Santos", undefined, new Date(1980, 1, 20));
cliente10.Documentos.push(new Documento("2121212121212", TipoDocumento.RG, new Date(2047, 10, 12)));
cliente10.Documentos.push(new Documento("2222222222222", TipoDocumento.CPF, new Date(2016, 7, 25)));
cliente10.Endereco = new Endereco('Rua 10', "Bairro 10", "Cidade 10", "Estado 10", "Pais 10", "CodigoPostal 10");
cliente10.Telefones.push(new Telefone('41', "987654321"));
cliente10.Telefones.push(new Telefone('44', "911223344"));

cliente1.Dependentes.push(cliente3)
cliente3.Titular = (cliente1.clonar() as Cliente)
cliente2.Dependentes.push(cliente4)
cliente4.Titular = (cliente2.clonar() as Cliente)
cliente2.Dependentes.push(cliente5)
cliente5.Titular = (cliente2.clonar() as Cliente)
cliente6.Dependentes.push(cliente7)
cliente7.Titular = (cliente6.clonar() as Cliente)
cliente9.Dependentes.push(cliente8)
cliente8.Titular = (cliente9.clonar() as Cliente)
cliente9.Dependentes.push(cliente10)
cliente10.Titular = (cliente9.clonar() as Cliente)

clientesTestes.push(cliente1)
clientesTestes.push(cliente2)
clientesTestes.push(cliente3)
clientesTestes.push(cliente4)
clientesTestes.push(cliente5)
clientesTestes.push(cliente6)
clientesTestes.push(cliente7)
clientesTestes.push(cliente8)
clientesTestes.push(cliente9)
clientesTestes.push(cliente10)

export {clientesTestes}
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let clientesTestes: Array<Cliente> = [];

// Cliente 1
let cliente1 = new Cliente("Joao da Silva", undefined, new Date(1980, 5, 15));
cliente1.Documentos.push(new Documento("12345678901", TipoDocumento.CPF, new Date(2020, 6, 1)));
cliente1.Documentos.push(new Documento("987654", TipoDocumento.RG, new Date(2015, 2, 10)));
cliente1.Endereco = new Endereco('Avenida Principal', "Centro", "Sao Paulo", "SP", "Brasil", "010101-010");
cliente1.Telefones.push(new Telefone('11', "999991111"));
cliente1.Telefones.push(new Telefone('11', "33334444"));

// Cliente 2
let cliente2 = new Cliente("Maria Oliveira", "Joao da Silva", new Date(1975, 8, 20));
cliente2.Documentos.push(new Documento("98765432198", TipoDocumento.CPF, new Date(2022, 8, 5)));
cliente2.Documentos.push(new Documento("456789", TipoDocumento.RG, new Date(2010, 7, 20)));
cliente2.Endereco = new Endereco('Rua das Flores', "Jardim das Flores", "Rio de Janeiro", "RJ", "Brasil", "20000-000");
cliente2.Telefones.push(new Telefone('21', "988889999"));
cliente2.Telefones.push(new Telefone('21', "35554444"));

// Cliente 3
let cliente3 = new Cliente("Ana da Silva", 'Ana', new Date(2005, 10, 10));
cliente3.Documentos.push(new Documento("12345678912", TipoDocumento.CPF, new Date(2025, 9, 15)));
cliente3.Documentos.push(new Documento("987654", TipoDocumento.RG, new Date(2018, 12, 5)));
cliente3.Endereco = cliente1.Endereco.clonar() as Endereco;
cliente3.Telefones = cliente1.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente3.Titular = cliente1.clonar() as Cliente;
cliente1.Dependentes.push(cliente3);

// Cliente 4
let cliente4 = new Cliente("Pedro Oliveira", "Rafaela", new Date(2010, 4, 25));
cliente4.Documentos.push(new Documento("12345678923", TipoDocumento.CPF, new Date(2035, 9, 15)));
cliente4.Documentos.push(new Documento("987654", TipoDocumento.RG, new Date(2020, 12, 5)));
cliente4.Endereco = cliente2.Endereco.clonar() as Endereco;
cliente4.Telefones = cliente2.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente4.Titular = cliente2.clonar() as Cliente;
cliente2.Dependentes.push(cliente4);

// Cliente 5
let cliente5 = new Cliente("Fernanda Santos", undefined, new Date(1992, 3, 25));
cliente5.Documentos.push(new Documento("98765432102", TipoDocumento.CPF, new Date(2023, 6, 1)));
cliente5.Documentos.push(new Documento("654321", TipoDocumento.RG, new Date(2018, 1, 10)));
cliente5.Endereco = new Endereco('Rua Principal', "Centro", "Belo Horizonte", "MG", "Brasil", "30000-000");
cliente5.Telefones.push(new Telefone('31', "999998888"));
cliente5.Telefones.push(new Telefone('31', "33335555"));

// Cliente 6
let cliente6 = new Cliente("Carlos Souza", undefined, new Date(1988, 10, 12));
cliente6.Documentos.push(new Documento("12345678933", TipoDocumento.CPF, new Date(2020, 4, 5)));
cliente6.Documentos.push(new Documento("789012", TipoDocumento.RG, new Date(2015, 9, 20)));
cliente6.Endereco = new Endereco('Avenida das Palmeiras', "Jardim Botânico", "Curitiba", "PR", "Brasil", "80000-000");
cliente6.Telefones.push(new Telefone('41', "988887777"));
cliente6.Telefones.push(new Telefone('41', "33337777"));

// Cliente 7
let cliente7 = new Cliente("Mariana Santos", "Mari", new Date(2010, 8, 10));
cliente7.Documentos.push(new Documento("23456789012", TipoDocumento.CPF, new Date(2030, 5, 10)));
cliente7.Documentos.push(new Documento("543210", TipoDocumento.RG, new Date(2020, 9, 15)));
cliente7.Endereco = cliente5.Endereco.clonar() as Endereco;
cliente7.Telefones = cliente5.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente7.Titular = cliente5.clonar() as Cliente;
cliente5.Dependentes.push(cliente7);

// Cliente 8
let cliente8 = new Cliente("Gabriel Souza", undefined, new Date(2015, 2, 5));
cliente8.Documentos.push(new Documento("34567890123", TipoDocumento.CPF, new Date(2035, 6, 20)));
cliente8.Documentos.push(new Documento("765432", TipoDocumento.RG, new Date(2025, 11, 25)));
cliente8.Endereco = cliente6.Endereco.clonar() as Endereco;
cliente8.Telefones = cliente6.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente8.Titular = cliente6.clonar() as Cliente;
cliente6.Dependentes.push(cliente8);

// Cliente 9
let cliente9 = new Cliente("Vitor Costa", "Marcos", new Date(2019, 11, 10));
cliente9.Documentos.push(new Documento("78901234567", TipoDocumento.CPF, new Date(2039, 5, 22)));
cliente9.Documentos.push(new Documento("109876", TipoDocumento.RG, new Date(2035, 1, 18)));
cliente9.Endereco = cliente1.Endereco.clonar() as Endereco;
cliente9.Telefones = cliente1.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente9.Titular = cliente1.clonar() as Cliente;
cliente1.Dependentes.push(cliente9);

// Cliente 10
let cliente10 = new Cliente("Luiza Almeida", undefined, new Date(2020, 8, 5));
cliente10.Documentos.push(new Documento("89012345678", TipoDocumento.CPF, new Date(2040, 6, 12)));
cliente10.Documentos.push(new Documento("210345", TipoDocumento.RG, new Date(2034, 10, 25)));
cliente10.Endereco = cliente2.Endereco.clonar() as Endereco;
cliente10.Telefones = cliente2.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente10.Titular = cliente2.clonar() as Cliente;
cliente2.Dependentes.push(cliente10);

// Cliente 11
let cliente11 = new Cliente("Mariana Santos", 'marcos', new Date(2021, 3, 15));
cliente11.Documentos.push(new Documento("90123456789", TipoDocumento.CPF, new Date(2041, 7, 10)));
cliente11.Documentos.push(new Documento("321098", TipoDocumento.RG, new Date(2037, 5, 18)));
cliente11.Endereco = cliente2.Endereco.clonar() as Endereco;
cliente11.Telefones = cliente2.Telefones.map(telefone => (telefone.clonar() as Telefone));
cliente11.Titular = cliente2.clonar() as Cliente;
cliente2.Dependentes.push(cliente11);

// Adicionando clientes ao array de clientes de teste
clientesTestes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11);

export {clientesTestes}
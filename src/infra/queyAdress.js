const EVENT_ADDRESS = `
CREATE TABLE IF NOT EXISTS "address" (
    "id" CHAR(36) PRIMARY KEY,
    "cep" INTERGER NOT NULL,
    "logradouro" varchar(100),
    "numero" INTEGER(5) NOT NULL,
    "complemento" varchar(50),
    "bairro" varchar(50),
    "cidade" VARCHAR(50),
    "estado" VARCHAR(30),
    "pais" varchar(30)
  );
`

//uuid ID_ADDRESS
let id_address1 = uuid();
let id_address2 = uuid();
let id_address3 = uuid();

const ADD_ADDRESS_DATA = `
INSERT INTO address (id, cep, logradouro, numero, complemento, bairro, cidade, estado, pais)
VALUES 
    ( '${id_address1}', 39404188, 'Rua Vinte e Nove', 50, '---', 'Jaragua', 'Montes Claros', 'MG', 'BRASIL')
    ( '${id_address2}', 69917764, 'Rua Manoel Gadelha', 20, '---', 'Conjunto Universitario', 'Rio Branco', 'AC', 'BRASIL')
    ( '${id_address3}', 58301070, 'Rua Minas Gerais', 404, '---', 'Popular', 'Santa Rita', 'PB', 'BRASIL')
`

function criaTabelaAddress() {
    db.run(ADDRESS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de endereco", error);
    });
}

function populaTabelaAddress() {
    db.run(ADD_ADDRESS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de enderecos", error);
    });
}
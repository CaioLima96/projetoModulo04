const EVENT_ADRESS = `
CREATE TABLE IF NOT EXISTS "adress" (
    "id" CHAR(36) PRIMARY KEY,
    "cep" INTERGER NOT NULL,
    "logradouro" varchar(100),
    "numero" INTEGER(5) NOT NULL,
    "complemento" varchar(50),
    "bairro" varchar(50),
    "cidade" VARCHAR(50),
    "estado" VARCHAR(30),
    "pais" varchar(30),
    "id_user" CHAR(36),
    FOREIGN KEY() REFERENCES (),
    FOREIGN KEY() REFERENCES ()
  );
`

//uuid ID_ADRESS
let id_adress1 = uuid();
let id_adress2 = uuid();
let id_adress3 = uuid();

//uuid dos ID_USER_ADRESS
let id_user_adress1 = uuid();
let id_user_adress2 = uuid();
let id_user_adress3 = uuid();

const ADD_ADRESS_DATA = `
INSERT INTO adress (id, cep, logradouro, numero, complemento, bairro, cidade, estado, pais, id_user)
VALUES 
    ( '${id_adress1}', 39404188, 'Rua Vinte e Nove', 50, '---', 'Jaragua', 'Montes Claros', 'MG', 'BRASIL', '${id_adress_adress1}')
    ( '${id_adress2}', 69917764, 'Rua Manoel Gadelha', 20, '---', 'Conjunto Universitario', 'Rio Branco', 'AC', 'BRASIL', '${id_adress_adress2}')
    ( '${id_adress3}', 58301070, 'Rua Minas Gerais', 404, '---', 'Popular', 'Santa Rita', 'PB', 'BRASIL', '${id_adress_adress3}')
`

function criaTabelaAdress() {
    db.run(EVENT_ADRESS, (error)=> {
       if (error) console.log("Erro ao criar tabela de endereco");
    });
}

function populaTabelaAdress() {
    db.run(ADD_ADRESS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de enderecos");
    });
}
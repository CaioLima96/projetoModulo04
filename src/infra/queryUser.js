//===== USER
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "users" (
    "id" CHAR(36) PRIMARY KEY,
    "nome" varchar(100),
    "email" VARCHAR(80),
    "senha" CHAR(50),
    "CPF" INTEGER(11) NOT NULL,
    "id_adress" CHAR(36),
    FOREIGN KEY(id_adress) REFERENCES adress(id)
  );
`

let user_id_1 = uuid();
let user_id_2 = uuid();
let user_id_3 = uuid();

let user_senha_1 = sha256((Math.random() + 1).toString(36). substring(2));
let user_senha_2 = sha256((Math.random() + 1).toString(36).substring(2));
let user_senha_3 = sha256((Math.random() + 1).toString(36).substring(2));

let user_adress_id_1 = uuid();
let user_adress_id_2 = uuid();
let user_adress_id_3 = uuid();

const ADD_USERS_DATA = `
INSERT INTO users (id, nome, email, senha, CPF, id_andress)
VALUES 
    ('${user_id_1}', 'Maria Silva', 'mariasilva@gmail.com', '${user_senha_1}', '48018705038','${user_adress_id_1}')
    ('${user_id_2}', 'Lívia Caroline Raquel Sales', 'liviacarolineraquelsales_@metalplasma.com.br', '${user_senha_2}', '02214968822','${user_adress_id_2}')
    ('${user_id_3}', 'Julio Edson Fernando Nascimento', 'julioedsonfernandonascimento@sp.gov.br', '${user_senha_3}', '10622466917','${user_adress_id_3}')
`

function criaTabelaUsers() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuarios");
    });
}

function populaTabelaUsers() {
    db.run(ADD_USERS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuarios");
    });
}

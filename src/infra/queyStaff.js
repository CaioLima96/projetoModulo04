const STAFF_SCHEMA = `
CREATE TABLE IF NOT EXISTS "staff" (
    "id" CHAR(36) PRIMARY KEY,
    "nome" varchar(100),
    "cargo" varchar(25),
    FOREIGN KEY() REFERENCES (),
    FOREIGN KEY() REFERENCES ()
  );
`

let id_staff1 = uuid();
let id_staff2 = uuid();
let id_staff3 = uuid();
let id_staff4 = uuid();

const ADD_STAFF_DATA = `
INSERT INTO staff (id, nome, cargo)
VALUES 
    ( '${id_staff1}', 'Fábio Almeida', 'Recepcionista')
    ( '${id_staff2}', 'David Fernando', 'Camareiro')
    ( '${id_staff3}', 'Lara Silva', 'Gerente')
    ( '${id_staff4}', 'Carlos José', 'Recepcionista')
`

function criaTabelaStaff() {
    db.run(STAFF_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}

function populaTabelaStaff() {
    db.run(ADD_STAFF_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de funcionarios");
    });
}
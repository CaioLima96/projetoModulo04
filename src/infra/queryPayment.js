const PAYMENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "payment" (
    "id" CHAR(36) PRIMARY KEY,
    "id_user" CHAR(36),
    "id_staff" CHAR(36),
    "valor_event" DECIMAL(6,2) NOT NULL,
    FOREIGN KEY() REFERENCES (),
    FOREIGN KEY() REFERENCES ()
  );
`

// uuid dos ID 
let id1 = uuid();
let id2 = uuid();
let id3 = uuid();

//uuid dos ID_USER
let id_user1 = uuid();
let id_user2 = uuid();
let id_user3 = uuid();

//uuid dos ID_STAFF
let id_staff1 = uuid();
let id_staff2 = uuid();
let id_staff3 = uuid();


const ADD_PAYMENT_DATA = `
INSERT INTO payment (id, id_user, id_staff, valor_event)
VALUES 
    ( '${id1}', '${id_user1}', '${id_staff1}', '')
    ( '${id2}', '${id_user2}', '${id_staff2}', '')
    ( '${id3}', '${id_user3}', '${id_staff3}', '')
`

function criaTabelaEvent() {
    db.run(EVENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de eventos");
    });
}

function populaTabelaEvent() {
    db.run(ADD_EVENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de eventos");
    });
}
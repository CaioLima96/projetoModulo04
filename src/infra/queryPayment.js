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
let id4 = uuid();

//uuid dos ID_USER
let id_user1 = uuid();
let id_user2 = uuid();
let id_user3 = uuid();
let id_user4 = uuid();

//uuid dos ID_STAFF
let id_staff1 = uuid();
let id_staff2 = uuid();
let id_staff3 = uuid();
let id_staff4 = uuid();

const ADD_PAYMENT_DATA = `
INSERT INTO payment (id, id_user, id_staff, valor_event)
VALUES 
    ( '${id1}', '${id_user1}', '${id_staff1}', 200)
    ( '${id2}', '${id_user2}', '${id_staff2}', 60)
    ( '${id3}', '${id_user3}', '${id_staff3}', 200)
    ( '${id4}', '${id_user4}', '${id_staff4}', 150)
`

function criaTabelaPayment() {
    db.run(PAYMENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pagamentos");
    });
}

function populaTabelaPayment() {
    db.run(ADD_PAYMENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pagamentos");
    });
}
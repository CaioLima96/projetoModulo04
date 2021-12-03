const PAYMENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "payment" (
    "id" CHAR(36) PRIMARY KEY,
    "id_user" CHAR(36),
    "id_staff" CHAR(36),
    "valor_total" DECIMAL(6,2) NOT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_staff) REFERENCES staff(id)
  );
`

// uuid dos ID 
let id_pay1 = uuid();
let id_pay2 = uuid();
let id_pay3 = uuid();
let id_pay4 = uuid();

const ADD_PAYMENT_DATA = `
INSERT INTO payment (id, id_user, id_staff, valor_total)
VALUES 
    ( '${id_pay1}', '${user_id_1}', '${id_staff1}', 200)
    ( '${id_pay2}', '${user_id_2}', '${id_staff2}', 60)
    ( '${id_pay3}', '${user_id_3}', '${id_staff3}', 200)
    ( '${id_pay4}', '${user_id_4}', '${id_staff4}', 150)
`

function criaTabelaPayment() {
    db.run(PAYMENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pagamentos", error);
    });
}

function populaTabelaPayment() {
    db.run(ADD_PAYMENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pagamentos", error);
    });
}
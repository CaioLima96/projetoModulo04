const EVENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "events" (
    "id" CHAR(36) PRIMARY KEY,
    "nome" varchar(100),
    "data_inicio" DATETIME,
    "data_fim" DATETIME,
    "qtd_pessoas" INTEGER(5) NOT NULL,
    "valor_event" DECIMAL(6,2) NOT NULL,
    "faixa_etaria" varchar(2),
    "descricao" varchar(250),
    "id_booking" CHAR(36),
    "id_user" CHAR(36),
    "local_event" varchar(50),
    "duracao" varchar(15),
    FOREIGN KEY(id_booking) REFERENCES booking(id),
    FOREIGN KEY(id_user) REFERENCES user(id)
  );
`

const ADD_EVENT_DATA = `
INSERT INTO events (id, nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, id_booking, id_user, local_event)
VALUES 
    (' ', 'Ano Novo', '2021-12-31 20:00:00', )
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
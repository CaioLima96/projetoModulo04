/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const {v4: uuid} = require("uuid")
const sqlite3 = require('sqlite3').verbose();
const sha256 = require("js-sha256")
const db = new sqlite3.Database('src/infra/database.db');


//===== USERS
const USERS_SCHEMA = ``

const ADD_USERS_DATA = ``

function criaTabelaUser() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaUser() {
    db.run(ADD_USERS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}



//===== BOOKING
const BOOKING_SCHEMA = ``

const  ADD_BOOKING_DATA = ``

function criaTabelaBooking() {
    db.run(BOOKING_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaBooking() {
    db.run(ADD_BOOKING_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}



//===== PAYMENT
const PAYMENT_SCHEMA = ``

const ADD_PAYMENT_DATA = ``

function criaTabelaPayment() {
    db.run(ADD_PAYMENT_DATA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaPayment() {
    db.run(PAYMENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}



//===== STAFF
const STAFF_SCHEMA = ``

const ADD_STAFF_DATA = ``

function criaTabelaStaff() {
    db.run(STAFF_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaStaff() {
    db.run(ADD_STAFF_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}



//===== ROOM

const ROOM_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "rooms" (
        "id" CHAR(36) PRIMARY KEY,
        "tipo_de_quarto" varchar(100),
        "numero" INTEGER(4),
        "qtd_max_pessoas" INTEGER(6) ,
        "andar" INTEGER(2),
        "status" varchar(100),
        "valor_quarto" DECIMAL(6,2)
    );
`

room_id_1 = uuid();
room_id_2 = uuid();
room_id_3 = uuid();
room_id_4 = uuid();

const ADD_ROOM_DATA = `
    INSERT INTO events (id, tipo_de_quarto, numero, qtd__max_pessoas, andar, status, valor_quarto)
    VALUES 
        ('${room_id_1}', 'casal simples', 010, 02, 01, 'livre', 300.00)
        ('${room_id_2}', 'triplo', 022, 03, 02, ocupado, 400.00)
        ('${room_id_3}', 'duplo', 014, 01, ocupado, 300.00)
        ('${room_id_4}', 'casal luxo', 101, 02, 10, 800.00)
`

function criaTabelaRoom() {
    db.run(ROOM_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de quartos");
    });
}

function populaTabelaRoom() {
    db.run(ADD_ROOM_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de quartos");
    });
}



//===== EVENT
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



//===== EXPERIENCES
const EXPERIENCES_SCHEMA = ``

const ADD_EXPERIENCES_DATA = ``

function criaTabelaExperience() {
    db.run(EXPERIENCES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaExperience() {
    db.run(ADD_EXPERIENCES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaUser()
    populaTabelaUser()
    criaTabelaBooking()
    populaTabelaBooking()
    criaTabelaPayment()
    populaTabelaPayment()
    criaTabelaStaff()
    populaTabelaStaff()
    criaTabelaRoom()
    populaTabelaRoom()
    criaTabelaEvent()
    populaTabelaEvent()
    criaTabelaExperience()
    populaTabelaExperience()
});
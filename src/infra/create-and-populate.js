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
    CREATE TABLE IF NOT EXISTS "" (
        "id" CHAR(36) PRIMARY KEY,
        "tipo_de_quarto" VARCHAR(100),
        "numero" INTEGER(4),
        "qtd_max_pessoas" INTEGER(6) ,
        "andar" INTEGER(2),
        "status" VARCHAR(100),
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
        ('${room_id_1}', 'casal simples', 010, 02, 01, 'livre', 300.00),
        ('${room_id_2}', 'triplo', 022, 03, 02, 'Ocupado', 400.00),
        ('${room_id_3}', 'duplo', 014, 01, 'Ocupado', 300.00),
        ('${room_id_4}', 'casal luxo', 101, 02, 10, 'Livre', 800.00)
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
        "nome" VARCHAR(150),
        "data_inicio" DATETIME,
        "data_fim" DATETIME,
        "qtd_pessoas" INTEGER(5),
        "valor_event" DECIMAL(6,2),
        "faixa_etaria" VARCHAR(2),
        "descricao" VARCHAR(500),
        "duracao" VARCHAR(15),
        "local_event" VARCHAR(50)
    );
`

event_id_1 = uuid()
event_id_2 = uuid()
event_id_3 = uuid()
event_id_4 = uuid()

const ADD_EVENT_DATA = `
    INSERT INTO events (id, nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, duracao, local_event)
    VALUES 
        ('${event_id_1}', 'Colônia de férias', '2022-01-05 10:30:00', '2022-01-15 10:30:00', 280, 200.00, '12+', 'Atividades programadas, recreativas esportiva e, jantares em família.', '10 dias', 'Área externa'),

        ('${event_id_2}', 'Festa tradicional da cidade', '2022-02-13 13:00:00', '2022-02-16 22:00:00', 180, 60.00, 'Livre', 'Venha comemorar o aniversário da nossa cidade com comidas típicas e muito mais.', '3 dias', 'Salão'),

        ('${event_id_3}', 'Eventos corporativos', '2022-03-14 15:00:00', 2022-03-18 20:00:00', 400, 200.00, '18+', 'Atividades como convenções, treinamentos, reuniões e kick-off.', '4 dias', 'Salão'),

        ('${event_id_4}', 'Cursos e workshops', '2022-03-20 10:00:00', '2022-04-05 16:00:00', 400, 150.00, '14+', 'Dursos e workshops de gastronomia com chefs renomados', '17 dias', 'Salão' )
        
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
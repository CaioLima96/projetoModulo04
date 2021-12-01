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
       if (error) console.log("Erro ao criar tabela de staff");
    });
}

function populaTabelaStaff() {
    db.run(ADD_STAFF_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de staff");
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
        ('${room_id_3}', 'duplo', 014, 02, 01, 'Ocupado', 300.00),
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

        ('${event_id_4}', 'Cursos e workshops', '2022-03-20 10:00:00', '2022-04-05 16:00:00', 400, 150.00, '14+', 'Dursos e workshops de gastronomia com chefs renomados', '17 dias', 'Salão')
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

const EXPERIENCES_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "experiences" (
        "id" CHAR(36) PRIMARY KEY,
        "nome" VARCHAR(150),
        "valor_exp" DECIMAL(6,2),
        "horario" DATETIME,
        "duracao" VARCHAR(15),
        "local_experience" VARCHAR(15),
        "dia_semana" VARCHAR(50),
        "qtd_pessoas" INTEGER(5),
        "descricao" VARCHAR(500)
    );
`

exp_id_1 = uuid()
exp_id_2 = uuid()
exp_id_3 = uuid()

const ADD_EXPERIENCES_DATA = `
    INSERT INTO experiences (id, nome, valor_exp, horario, duracao, local_experience, dia_semana, qtd_pessoas, descricao)
    VALUES 
        ('${exp_id_1}', 'Massagem Facial', 300.00, '10:00:00', '1h20min', 'SPA', 'fds', 02, 'Deliciosa e completa massagem corporal relaxante. Acompanha alongamento na região do pescoço promovendo uma melhora nas tensões. Um momento de bem-estar dos pés à cabeça.'),

        ('${exp_id_2}', 'Jantar à luz de vela', 2500.00, '20:00:00', '1:30:00', 'Jardim do hotel', 'sexta, sabado, domingo', 02, 'Não há nada melhor do que celebrar um sentimento tão lindo como o amor! O Jantar à luz de velas é servido em espaço exclusivo no jardim do hotel – um ambiente com flores, árvores e parreiras!'),

        ('${exp_id_3}', 'Chá da tarde', 90.00, '17:00:00', '1:00:00', 'segunda à sexta', 05, 'O maravilhoso Chá das Cinco serve sabor e elegância em uma agradável experiência. Na mesa posta, doçuras e ternuras criam memórias afetivas durante um delicioso momento de partilha.')
`

function criaTabelaExperience() {
    db.run(EXPERIENCES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de experiência");
    });
}

function populaTabelaExperience() {
    db.run(ADD_EXPERIENCES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de experiência");
    });
}



//===== USER EVENT

const USER_EVENT_SCHEMA = ``

const  ADD_USER_EVENT_DATA = ``

function criaTabelaBooking() {
    db.run(USER_EVENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de user_event");
    });
}

function populaTabelaBooking() {
    db.run(ADD_USER_EVENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de user_event");
    });
}



//===== USER EXPERIENCE

const USER_EXPERIENCE_SCHEMA = ``

const  ADD_USER_EXPERIENCE_DATA = ``

function criaTabelaBooking() {
    db.run(USER_EXPERIENCE_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de user_experience");
    });
}

function populaTabelaBooking() {
    db.run(ADD_USER_EXPERIENCE_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de user_experience");
    });
}



//===== BOOKING

const BOOKING_SCHEMA = ``

const  ADD_BOOKING_DATA = ``

function criaTabelaBooking() {
    db.run(BOOKING_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de booking");
    });
}

function populaTabelaBooking() {
    db.run(ADD_BOOKING_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de booking");
    });
}



//===== PAYMENT

const PAYMENT_SCHEMA = ``

const ADD_PAYMENT_DATA = ``

function criaTabelaPayment() {
    db.run(ADD_PAYMENT_DATA, (error)=> {
       if (error) console.log("Erro ao criar tabela de payment");
    });
}

function populaTabelaPayment() {
    db.run(PAYMENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao popular tabela de payment");
    });
}




db.serialize( ()=> {
    criaTabelaUser()
    populaTabelaUser()
    criaTabelaStaff()
    populaTabelaStaff()
    criaTabelaRoom()
    populaTabelaRoom()
    criaTabelaEvent()
    populaTabelaEvent()
    criaTabelaExperience()
    populaTabelaExperience()
    criaTabelaBooking()
    populaTabelaBooking()
    criaTabelaPayment()
    populaTabelaPayment()
});
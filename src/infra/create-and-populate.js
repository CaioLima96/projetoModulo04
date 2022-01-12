//const valoresDao = require("../dao/valoresDao")

/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const {v4: uuid} = require("uuid")
const sqlite3 = require('sqlite3').verbose();
const sha256 = require("js-sha256")
const db = new sqlite3.Database('./database.db');


let id_address1 = uuid();
let id_address2 = uuid();
let id_address3 = uuid();

//===== USERS
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "users" (
    "id" CHAR(36) PRIMARY KEY,
    "nome" varchar(100),
    "email" VARCHAR(80),
    "senha" CHAR(50),
    "cpf" INTEGER(11),
    "id_address" CHAR(36),
    FOREIGN KEY(id_address) REFERENCES address(id)
  );
`
let user_id_1 = uuid();
let user_id_2 = uuid();
let user_id_3 = uuid();

let user_senha_1 = sha256((Math.random() + 1).toString(36). substring(2));
let user_senha_2 = sha256((Math.random() + 1).toString(36).substring(2));
let user_senha_3 = sha256((Math.random() + 1).toString(36).substring(2));

const ADD_USERS_DATA = `
INSERT INTO users (id, nome, email, senha, cpf, id_address)
VALUES 
    ('${user_id_1}', 'Maria Silva', 'mariasilva@gmail.com', '${user_senha_1}', 45678912378,'${id_address1}'),
    ('${user_id_2}', 'Lívia Caroline Raquel Sales', 'liviacarolineraquelsales_@metalplasma.com.br', '${user_senha_2}', 12312312311,'${id_address2}'),
    ('${user_id_3}', 'Julio Edson Fernando Nascimento', 'julioedsonfernandonascimento@sp.gov.br', '${user_senha_3}', 98745612333,'${id_address3}')
`

function criaTabelaUser() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuarios", error);
    });
}

function populaTabelaUser() {
    db.run(ADD_USERS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuarios", error);
    });
}



//=====ADRESS
const ADDRESS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "address" (
    "id" CHAR(36) PRIMARY KEY,
    "cep" INTERGER,
    "logradouro" varchar(100),
    "numero" INTEGER(5),
    "complemento" varchar(50),
    "bairro" varchar(50),
    "cidade" VARCHAR(50),
    "estado" VARCHAR(30),
    "pais" varchar(30)
  );
`

const ADD_ADDRESS_DATA = `
INSERT INTO address (id, cep, logradouro, numero, complemento, bairro, cidade, estado, pais)
VALUES 
    ( '${id_address1}', 39404188, 'Rua Vinte e Nove', 50, '---', 'Jaragua', 'Montes Claros', 'MG', 'BRASIL'),
    ( '${id_address2}', 69917764, 'Rua Manoel Gadelha', 20, '---', 'Conjunto Universitario', 'Rio Branco', 'AC', 'BRASIL'),
    ( '${id_address3}', 58301070, 'Rua Minas Gerais', 404, '---', 'Popular', 'Santa Rita', 'PB', 'BRASIL')
`

function criaTabelaAddress() {
    db.run(ADDRESS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de endereco", error);
    });
}

function populaTabelaAddress() {
    db.run(ADD_ADDRESS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de enderecos", error);
    });
}


//===== STAFF
const STAFF_SCHEMA = `
CREATE TABLE IF NOT EXISTS "staff" (
    "id" CHAR(36) PRIMARY KEY,
    "nome" varchar(150),
    "cargo" varchar(25)
  );
`

let id_staff1 = uuid();
let id_staff2 = uuid();
let id_staff3 = uuid();
let id_staff4 = uuid();

const ADD_STAFF_DATA = `
INSERT INTO staff (id, nome, cargo)
VALUES 
    ( '${id_staff1}', 'Fábio Almeida', 'Recepcionista'),
    ( '${id_staff2}', 'David Fernando', 'Camareiro'),
    ( '${id_staff3}', 'Lara Silva', 'Gerente'),
    ( '${id_staff4}', 'Carlos José', 'Recepcionista')
`
function criaTabelaStaff() {
    db.run(STAFF_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de staff", error);
    });
}

function populaTabelaStaff() {
    db.run(ADD_STAFF_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de staff", error);
    });
}



//===== ROOM

const ROOM_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "rooms" (
        "id" CHAR(36) PRIMARY KEY,
        "tipo_de_quarto" VARCHAR(100),
        "numero" INTEGER(4),
        "qtd_max_pessoas" INTEGER(6) ,
        "andar" INTEGER(2),
        "status" VARCHAR(100),
        "valor_quarto" DECIMAL(6,2),
        "url" VARCHAR(250)
    );
`

room_id_1 = uuid();
room_id_2 = uuid();
room_id_3 = uuid();
room_id_4 = uuid();

const ADD_ROOM_DATA = `
    INSERT INTO rooms (id, tipo_de_quarto, numero, qtd_max_pessoas, andar, status, valor_quarto, url)
    VALUES 
        ('${room_id_1}', 'casal simples', 010, 02, 01, 'livre', 300.00, 'https://i.imgur.com/GI7hGv2.jpg'),
        ('${room_id_2}', 'triplo', 022, 03, 02, 'Ocupado', 400.00, 'https://i.imgur.com/LaC9OMo.jpg'),
        ('${room_id_3}', 'duplo', 014, 02, 01, 'Ocupado', 300.00, 'https://i.imgur.com/FeqPMTa.jpg'),
        ('${room_id_4}', 'casal luxo', 101, 02, 10, 'Livre', 800.00, 'https://i.imgur.com/I5DaH09.jpg')
`

function criaTabelaRoom() {
    db.run(ROOM_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de quartos", error);
    });
}

function populaTabelaRoom() {
    db.run(ADD_ROOM_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de quartos", error);
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
        "local_event" VARCHAR(50),
        "url" VARCHAR(250)
    );
`

event_id_1 = uuid()
event_id_2 = uuid()
event_id_3 = uuid()
event_id_4 = uuid()

const ADD_EVENT_DATA = `
    INSERT INTO events (id, nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, duracao, local_event, url)
    VALUES 
        ('${event_id_1}', 'Colônia de férias', '2022-01-05 10:30:00', '2022-01-15 10:30:00', 280, 200.00, '12+', 'Atividades programadas, recreativas esportiva e, jantares em família.', '10 dias', 'Área externa', 'https://i.imgur.com/unVsGZ6.jpg'),
        ('${event_id_2}', 'Festa tradicional da cidade', '2022-02-13 13:00:00', '2022-02-16 22:00:00', 180, 60.00, 'Livre', 'Venha comemorar o aniversário da nossa cidade com comidas típicas e muito mais.', '3 dias', 'Salão', 'https://i.imgur.com/ZdaqMEE.jpg'),
        ('${event_id_3}', 'Eventos corporativos', '2022-03-14 15:00:00', '2022-03-18 20:00:00', 400, 200.00, '18+', 'Atividades como convenções, treinamentos, reuniões e kick-off.', '4 dias', 'Salão', 'https://i.imgur.com/4LWwGZ5.jpg'),
        ('${event_id_4}', 'Cursos e workshops', '2022-03-20 10:00:00', '2022-04-05 16:00:00', 400, 150.00, '14+', 'Dursos e workshops de gastronomia com chefs renomados', '17 dias', 'Salão', 'https://i.imgur.com/fY2a2Js.jpg')
`

function criaTabelaEvent() {
    db.run(EVENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de eventos", error);
    });
}

function populaTabelaEvent() {
    db.run(ADD_EVENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de eventos", error);
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
        "local_experience" VARCHAR(25),
        "dia_semana" VARCHAR(50),
        "qtd_pessoas" INTEGER(5),
        "descricao" VARCHAR(500),
        "url" VARCHAR(250)
    );
`

exp_id_1 = uuid()
exp_id_2 = uuid()
exp_id_3 = uuid()

const ADD_EXPERIENCES_DATA = `
    INSERT INTO experiences (id, nome, valor_exp, horario, duracao, local_experience, dia_semana, qtd_pessoas, descricao, url)
    VALUES 
        ('${exp_id_1}', 'Massagem Facial', 300.00, '10:00:00', '1h20min', 'SPA', 'fds', 02, 'Deliciosa e completa massagem corporal relaxante. Acompanha alongamento na região do pescoço promovendo uma melhora nas tensões. Um momento de bem-estar dos pés à cabeça.', 'https://i.imgur.com/4g6j68h.jpg'),
        ('${exp_id_2}', 'Jantar à luz de vela', 2500.00, '20:00:00', '1:30:00', 'Jardim do hotel', 'sexta, sabado, domingo', 02, 'Não há nada melhor do que celebrar um sentimento tão lindo como o amor! O Jantar à luz de velas é servido em espaço exclusivo no jardim do hotel – um ambiente com flores, árvores e parreiras!', 'https://i.imgur.com/hZhHgqc.jpg'),
        ('${exp_id_3}', 'Chá da tarde', 90.00, '17:00:00', '1:00:00', 'Jardim','segunda à sexta', 05, 'O maravilhoso Chá das Cinco serve sabor e elegância em uma agradável experiência. Na mesa posta, doçuras e ternuras criam memórias afetivas durante um delicioso momento de partilha.', 'https://i.imgur.com/8e3mevl.jpg')
`

function criaTabelaExperience() {
    db.run(EXPERIENCES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de experiência", error);
    });
}

function populaTabelaExperience() {
    db.run(ADD_EXPERIENCES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de experiência", error);
    });
}



//===== USER EVENT

const USER_EVENT_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "user_events" (
        "user_id" CHAR(36),
        "event_id" CHAR(36),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(event_id) REFERENCES events(id)
    );
`

const  ADD_USER_EVENT_DATA = `
    INSERT INTO user_events (user_id, event_id)
    VALUES
        ('${user_id_1}','${event_id_1}'),
        ('${user_id_2}','${event_id_2}')
`

function criaTabelaUserEvents() {
    db.run(USER_EVENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de user_event", error);
    });
}

function populaTabelaUserEvents() {
    db.run(ADD_USER_EVENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de user_event", error);
    });
}



//===== USER EXPERIENCE

const USER_EXPERIENCE_SCHEMA =  `
    CREATE TABLE IF NOT EXISTS "user_experiences" (
        "user_id" CHAR(36),
        "experience_id" CHAR(36),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(experience_id) REFERENCES experiences(id)
    );
`

const  ADD_USER_EXPERIENCE_DATA = `
    INSERT INTO user_experiences (user_id, experience_id)
    VALUES
        ('${user_id_1}','${exp_id_1}'),
        ('${user_id_2}','${exp_id_2}')
`

function criaTabelaUserExperience() {
    db.run(USER_EXPERIENCE_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de user_experience", error);
    });
}

function populaTabelaUserExperience() {
    db.run(ADD_USER_EXPERIENCE_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de user_experience", error);
    });
}



//===== BOOKING

//let bookTotal = valoresDao

const BOOKING_SCHEMA =  `
CREATE TABLE IF NOT EXISTS "booking" (
    "id" CHAR(36) PRIMARY KEY,
    "id_user" CHAR(36),
    "id_room" CHAR(36),
    "qtd_pessoas" VARCHAR(2),
    "data_entrada" DATETIME, 
    "data_saida"  DATETIME,
    "valor_total" INTERGER,
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_room) REFERENCES room(id)
);
`

let id_booking1 = uuid()
let id_booking2 = uuid()
let id_booking3 = uuid()


const  ADD_BOOKING_DATA = ` INSERT INTO booking (id, id_user, id_room, qtd_pessoas, data_entrada, data_saida, valor_total)
VALUES
    ('${id_booking1}','${user_id_1}','${room_id_1}','2','2022-03-21 12:00:00','2022-03-21 14:00:00', 150),
    ('${id_booking2}','${user_id_2}','${room_id_2}','4','2022-03-23 08:00:00','2022-03-23 10:00:00', 200),
    ('${id_booking3}','${user_id_3}','${room_id_3}','4','2022-03-23 06:00:00','2023-05-23 10:00:00', 455.33)
    `

function criaTabelaBooking() {
    db.run(BOOKING_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de booking", error);
    });
}

function populaTabelaBooking() {
    db.run(ADD_BOOKING_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de booking", error);
    });
}



//===== PAYMENT

const PAYMENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "payment" (
    "id" CHAR(36) PRIMARY KEY,
    "id_user" CHAR(36),
    "id_booking" CHAR(36),
    "id_staff" CHAR(36),
    "valor_total" DECIMAL(6,2),
    FOREIGN KEY(id_booking) REFERENCES booking(id),
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_staff) REFERENCES staff(id)
  );
`
// uuid dos ID 
let id_pay1 = uuid();
let id_pay2 = uuid();
let id_pay3 = uuid();

const ADD_PAYMENT_DATA = `
INSERT INTO payment (id, id_user, id_booking, id_staff, valor_total)
VALUES 
    ( '${id_pay1}', '${user_id_1}', '${id_booking1}', '${id_staff1}', 200),
    ( '${id_pay2}', '${user_id_2}', '${id_booking2}', '${id_staff2}', 60),
    ( '${id_pay3}', '${user_id_3}', '${id_booking3}', '${id_staff3}', 200)
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

db.serialize( ()=> {
    criaTabelaUser()
    populaTabelaUser()

    criaTabelaAddress()
    populaTabelaAddress()

    criaTabelaStaff()
    populaTabelaStaff()

    criaTabelaRoom()
    populaTabelaRoom()

    criaTabelaEvent()
    populaTabelaEvent()

    criaTabelaExperience()
    populaTabelaExperience()

    criaTabelaUserEvents()
    populaTabelaUserEvents()

    criaTabelaUserExperience()
    populaTabelaUserExperience()

    criaTabelaBooking()
    populaTabelaBooking()

    criaTabelaPayment()
    populaTabelaPayment()
});
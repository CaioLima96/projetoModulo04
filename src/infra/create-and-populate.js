/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
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
const ROOM_SCHEMA = ``

const ADD_ROOM_DATA = ``

function criaTabelaRoom() {
    db.run(ROOM_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaRoom() {
    db.run(ADD_ROOM_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}



//===== EVENT
const EVENT_SCHEMA = ``

const ADD_EVENT_DATA = ``

function criaTabelaEvent() {
    db.run(EVENT_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaEvent() {
    db.run(ADD_EVENT_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
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
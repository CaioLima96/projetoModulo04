const bd = require('../infra/sqlite-db');
const { EVENT_TABLE: TABLE} = require('../utils/appConfig')

class EventDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    saveEvent = (event) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                event.id,
                event.nome,
                event.data_inicio,
                event.data_fim,
                event.qtd_pessoas,
                event.valor_event,
                event.faixa_etaria,
                event.descricao,
                event.duracao,
                event.local_event,
                (error) => {

                    if (error) {
                        reject({Msg: error.message});
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    }

    getEventById = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    
                    if(error) {
                        reject({Msg: error.message})
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    getAllEvents = () => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE}`,
                (error, results) => {

                    if(error) {
                        reject({Msg: error.message})
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    updateEvent = (id, event) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `UPDATE ${TABLE} SET nome = ?, data_inicio = ?, data_fim = ?, qtd_pessoas = ?, valor_event =?, faixa_etaria = ?, descricao = ?, duracao = ?, local_event = ? WHERE id = ?`, 
                event.nome,
                event.data_inicio,
                event.data_fim,
                event.qtd_pessoas,
                event.valor_event,
                event.faixa_etaria,
                event.descricao,
                event.duracao,
                event.local_event,
                id,
                (error) => {
                    
                    if (error) {
                        reject({Msg: error.message});
                    } else {
                        resolve(true);
                    }
                }
            )
        })
    }

    deleteEvent = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, 
                id, 
                (error) => {

                    if (error) {
                        reject({Msg: error.message})
                    } else {
                        resolve(true);
                    }
            })
        })
    }
}


module.exports = new EventDao(bd)
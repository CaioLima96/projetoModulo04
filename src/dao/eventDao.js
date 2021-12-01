const bd = require('../infra/sqlite-db');
const { EVENT_TABLE: TABLE} = require('../utils/appConfig')


class EventDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getEventById = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("Usuário unico retornado com sucesso")
                    if(error) {
                        reject("Error: " + error)
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
                    console.log("Todos os Usuários retornados com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
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
                    console.log("Rota post feita com sucesso")
                    if (error) {
                        reject("Error: " + error);
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    }

    deleteEvent = (id) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, 
            id, 
            (error) => {
                console.log("Rota delete feita com sucesso")
                if (error) {
                reject(error);
                } else {
                resolve(true);
                }
          })
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
                    console.log("Rota update feita com sucesso")
                    if (error) {
                        reject(error);
                    } else {
                        resolve(true);
                    }
                }
            )
        })
    }
}


module.exports = new EventDao(bd)
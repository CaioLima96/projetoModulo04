const bd = require('../infra/sqlite-db');
const { ROOMS_TABLE: TABLE} = require('../utils/appConfig')


class RoomDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getRoomById = (id) => {
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

    getAllRooms = () => {
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

    saveRoom = (room) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?)`,
            room.id,
            room.tipo_de_quarto,
            room.numero,
            room.qtd_max_pessoas,
            room.andar,
            room.status,
            room.valor_quarto,
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

    deleteRoom = (id) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, id, 
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

    updateRoom = (id, room) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET tipo_de_quarto = ?, nome_ou_numero = ?, qtd_max_pessoas = ?, andar = ?, status =?, WHERE id = ?`, 
            room.tipo_de_quarto,
            room.numero,
            room.qtd_max_pessoas,
            room.andar,
            room.status,
            room.valor_quarto,
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

module.exports = new RoomDao(bd)
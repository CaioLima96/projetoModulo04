const bd = require('../infra/sqlite-db');
const { ROOM_TABLE: TABLE} = require('../utils/appConfig')


class RoomDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

	saveRoom = (room) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(
				`INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
				room.id,
				room.tipo_de_quarto,
				room.numero,
				room.qtd_max_pessoas,
				room.andar,
				room.status,
				room.valor_quarto,
                room.url,
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

    getRoomById = (id) => {
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

    getAllRooms = () => {
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

    updateRoom = (id, room) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(
				`UPDATE ${TABLE} SET tipo_de_quarto = ?, numero = ?, qtd_max_pessoas = ?, andar = ?, status = ?, valor_quarto = ? WHERE id = ?`, 
				room.tipo_de_quarto,
				room.numero,
				room.qtd_max_pessoas,
				room.andar,
				room.status,
				room.valor_quarto,
				id,
				(error) => {

					if (error) {
						reject({Msg: error.message})
					} else {
						resolve(true)
					}
				}
			)
        })
    }

    deleteRoom = (id) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, id, 
			(error) => {

				if (error) {
					reject({Msg: error.message});
				} else {
					resolve(true);
				}
			})
        })
    }
}

module.exports = new RoomDao(bd)
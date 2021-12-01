const bd = require('../infra/sqlite-db');
const { BOOKING_TABLE: TABLE} = require('../utils/appConfig')


class BookingDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getBookingById = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("Reserva unica retornada com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    getAllBookings = () => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE}`,
                (error, results) => {
                    console.log("Todos as reservas retornadas com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    saveBooking = (book) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            book.id,
            book.id_user,
            book.id_room,
            book.qtd_pessoas,
            book.data_entrada,
            book.data_saida,
            book.user_event_id,
            book.user_experience_id,
            book.valor_total,
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

    deleteBooking = (id) => {
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
    
    updateBooking = (id, book) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET id_user = ?, id_room = ?, qtd_pessoas = ?, data_entrada = ?, data_saida =?, user_event_id = ?, user_experience_id = ?, valor_total = ? WHERE id = ?`, 
            book.id_user,
            book.id_room,
            book.qtd_pessoas,
            book.data_entrada,
            book.data_saida,
            book.user_event_id,
            book.user_experience_id,
            book.valor_total,
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


module.exports = new BookingDao(bd)
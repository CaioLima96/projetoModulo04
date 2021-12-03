const bd = require('../infra/sqlite-db');
const { BOOKING_TABLE: TABLE } = require('../utils/appConfig')


class BookingDao {
  constructor(dbConn) {
    this.dbConn = dbConn
  }

  saveBooking = (book) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(
        `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?)`,
        book.id,
        book.id_user,
        book.id_room,
        book.qtd_pessoas,
        book.data_entrada,
        book.data_saida,
        book.valor_total,
        (error) => {
          if (error) {
            reject({ Msg: error.message });
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  getBookingById = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn.all(
        `SELECT * FROM ${TABLE} WHERE id like ?`,
        id,
        (error, results) => {
          if (error) {
            reject({ Msg: error.message })
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
          if (error) {
            reject({ Msg: error.message })
          } else {
            resolve(results)
          }
        }
      )
    })
  }

  updateBooking = (id, book) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(
        `UPDATE ${TABLE} SET id_user = ?, id_room = ?, qtd_pessoas = ?, data_entrada = ?, data_saida =?, valor_total = ? WHERE id = ?`,
        book.id_user,
        book.id_room,
        book.qtd_pessoas,
        book.data_entrada,
        book.data_saida,
        book.valor_total,
        id,
        (error) => {
          if (error) {
            reject({ Msg: error.message });
          } else {
            resolve(true);
          }
        }
      )
    })
  }

  deleteBooking = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, id,
        (error) => {
          if (error) {
            reject({ Msg: error.message });
          } else {
            resolve(true);
          }
        })
    })
  }


}


module.exports = new BookingDao(bd)
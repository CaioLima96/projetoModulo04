const bd = require('../infra/sqlite-db');
const { PAYMENT_TABLE: TABLE} = require('../utils/appConfig')


class PaymentDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getPaymentById = (id) => {
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

    getAllPayments = () => {
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

    savePayment = (pay) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?)`,
            pay.id,
            pay.id_user,
            pay.id_staff,
            pay.valor_total,
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

    deletePayment = (id) => {
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
    
    updatePayment = (id, payment) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET id_user = ?, id_staff = ?, valor_total  = ? WHERE id = ? `, 
            payment.id_user,
            payment.id_staff,
            payment.valor_total,
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
}


module.exports = new PaymentDao(bd)
const bd = require('../infra/sqlite-db');
const { EXPERIENCES_TABLE: TABLE} = require('../utils/appConfig')


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
                    console.log("Usuário único retornado com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    getAllPayment = () => {
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

    saveUser = (exp) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?)`,
            exp.id,
            exp.idUser,
            exp.idStaff,
            exp.valorTotal,
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

    deletePayment = (id) => {
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
    
    updateExperience = (id, payment) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET id = ?, idUser = ?, idStaff = ?, valorTotal  = ?, WHERE id = ? `, 
            payment.id,
            payment.idUser,
            payment.idStaff,
            payment.valorTotal,
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


module.exports = new PaymentDao(bd)
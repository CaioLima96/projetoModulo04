const bd = require('../infra/sqlite-db');
const { ROOMS_TABLE: TABLE} = require('../utils/appConfig')


class StaffDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getStaffById = (id) => {
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

    getAllStaffs = () => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE}`,
                (error, results) => {
                    console.log("Todos os usuários retornados com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    saveUser = (staff) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?)`,
            staff.id,
            staff.nome,
            staff.cargo,

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

    deleteStaff = (id) => {
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

    updateExperience = (id, staff) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET nome = ?, staff = ?, cargo = ?, WHERE id = ?`, 
            staff.nome,
            staff.staff,
            staff.cargo,
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

module.exports = new StaffDao(bd)
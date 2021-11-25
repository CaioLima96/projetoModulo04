const bd = require('../infra/sqlite-db');
const { EXPERIENCES_TABLE: TABLE} = require('../util/appConfig')


class ExperienceDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getExperienceById = (id) => {
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

    getAllExperiences = () => {
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
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            exp.id,
            exp.nome,
            exp.valor_exp,
            exp.id_booking,
            exp.id_user,
            exp.duracao,
            exp.local,
            exp.data,
            exp.qtd_pessoas,
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

    deleteExperience = (id) => {
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
    
    updateExperience = (id, exp) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `UPDATE ${TABLE} SET nome = ?, valor_exp = ?, id_booking = ?, id_user = ?, duracao =?, local = ?, data = ?, qtd_pessoas = ? WHERE id = ?`, 
            exp.nome,
            exp.valor_exp,
            exp.id_booking,
            exp.id_user,
            exp.duracao,
            exp.local,
            exp.data,
            exp.qtd_pessoas,
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


module.exports = new ExperienceDao(bd)
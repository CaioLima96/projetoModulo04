const bd = require('../infra/sqlite-db');
const { EXPERIENCES_TABLE: TABLE} = require('../utils/appConfig')


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

    saveExperience = (exp) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(
            `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            exp.id,
            exp.nome,
            exp.valor_exp,
            exp.horario,
            exp.duracao,
            exp.local_experience,
            exp.dia_semana,
            exp.qtd_pessoas,
            exp.descricao,
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
            `UPDATE ${TABLE} SET nome = ?, valor_exp = ?, horario = ?, duracao = ?, local = ?, dia_semana = ?, qtd_pessoas = ?, descricao = ? WHERE id = ?`, 
            exp.nome,
            exp.valor_exp,
            exp.horario,
            exp.duracao,
            exp.local_experience,
            exp.dia_semana,
            exp.qtd_pessoas,
            exp.descricao,
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
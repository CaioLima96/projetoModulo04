const bd = require('../infra/sqlite-db');
const { EXPERIENCES_TABLE: TABLE} = require('../utils/appConfig')


class ExperienceDao {
    constructor(dbConn) {
        this.dbConn = dbConn
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

					if (error) {
						reject({Msg: error.message})
					} else {
						resolve(true)
					}
				}
			);
        });
    }

    getExperienceById = (id) => {
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

    getAllExperiences = () => {
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
    
    updateExperience = (id, exp) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(
				`UPDATE ${TABLE} SET nome = ?, valor_exp = ?, horario = ?, duracao = ?, local_experience = ?, dia_semana = ?, qtd_pessoas = ?, descricao = ? WHERE id = ?`, 
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
				
					if (error) {
						reject({Msg: error.message});
					} else {
						resolve(true);
					}
				}
			)
        })
    }

    deleteExperience = (id) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`,
			id, 
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


module.exports = new ExperienceDao(bd)
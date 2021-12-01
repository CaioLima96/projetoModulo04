const bd = require('../infra/sqlite-db');
const { ADDRESS_TABLE: TABLE} = require('../utils/appConfig')


class ExperienceDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    getAddressyId = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("Endereço unico retornado com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    getAllAddress = () => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE}`,
                (error, results) => {
                    console.log("Todos os Endereço retornados com sucesso")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    saveAddress = (address) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                address.id,
                address.cep,
                address.logradouro,
                address.numero,
                address.complemento,
                address.bairro,
                address.cidade,
                address.estado,
                address.pais,
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

    deleteAddress = (id) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, 
            id, 
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
    
    updateAddress = (id, address) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `UPDATE ${TABLE} SET id = ?. cep = ?, logradouro = ?, numero = ?, complemento = ?, bairro =?, cidade = ?, estado = ?, pais = ? WHERE id = ?`, 
                address.id,
                address.cep,
                address.logradouro,
                address.numero,
                address.complemento,
                address.bairro,
                address.cidade,
                address.estado,
                address.pais,
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


module.exports = new AddressDao(bd)
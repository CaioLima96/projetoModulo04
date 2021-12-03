const bd = require('../infra/sqlite-db');
const { ADDRESS_TABLE: TABLE} = require('../utils/appConfig')


class AddressDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    saveAddress = (address) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
                    if (error) {
                        reject({ Msg: error.message });
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    }

    getAddressById = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(
                `SELECT * FROM ${TABLE} WHERE id like ?`,
                id,
                (error, results) => {
                    if(error) {
                        reject({ Msg: error.message })
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
                    if(error) {
                        reject({ Msg: error.message })
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    updateAddress = (id, address) => {
        return new Promise((resolve, reject) => {
            this.dbConn.run(
                `UPDATE ${TABLE} SET cep = ?, logradouro = ?, numero = ?, complemento = ?, bairro =?, cidade = ?, estado = ?, pais = ? WHERE id = ?`, 
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
                    if (error) {
                        reject({ Msg: error.message });
                    } else {
                        resolve(true);
                    }
                }
            )
        })
    }

    deleteAddress = (id) => {
        return new Promise((resolve, reject) => {
          this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, 
            id, 
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


module.exports = new AddressDao(bd)
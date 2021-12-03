const bd = require('../infra/sqlite-db');
const { USERS_TABLE: TABLE} = require('../utils/appConfig')

class UserDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    saveUser = (user) => {
      return new Promise((resolve, reject) => {
        this.dbConn.run(
          `INSERT INTO ${TABLE} VALUES ( ?, ?, ?, ?, ?, ?)`,
          user.id,
          user.nome,
          user.email,
          user.senha,
          user.cpf,
          user.id_address,
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

    getUserById = (id) => {
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

    getAllUsers = () => {
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

    updateUser = (id, user) => {
      return new Promise((resolve, reject) => {

        this.dbConn.run(
          `UPDATE ${TABLE} SET nome = ?, email = ?, senha = ?, cpf = ?, id_address = ? WHERE id = ? `, 
          user.nome,
          user.email,
          user.senha,
          user.cpf,
          user.id_address,
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

    deleteUser = (id) => {
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
    
  
}


module.exports = new UserDao(bd)
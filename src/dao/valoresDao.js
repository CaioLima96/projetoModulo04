//const bd = require('../infra/sqlite-db');
//const { USERS_TABLE: TABLE} = require('../utils/appConfig')

class ValoresDao {

    constructor(dbConn) {
        this.dbConn = dbConn
    }

    roomValor = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(

                `SELECT valor_quarto FROM rooms WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("valor retornado")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        console.log(results)
                        resolve(results)
                    }
                }

            )
        })
    }

    eventValor = (id) => {
        return new Promise((resolve, reject) => {
            this.dbConn.all(

                `SELECT valor_event FROM events WHERE id like ?`,
                id,
                (error, results) => {
                    console.log("valor evento retornado")
                    if(error) {
                        reject("Error: " + error)
                    } else {
                        console.log(results)
                        resolve(results)
                    }
                }

            )
        })
    }

    // expValor = (id) => {
    //     return new Promise((resolve, reject) => {
    //         this.dbConn.all(

    //             `SELECT valor_exp FROM experiences WHERE id like ?`,
    //             id,
    //             (error, results) => {
    //                 console.log("valor evento retornado")
    //                 if(error) {
    //                     reject("Error: " + error)
    //                 } else {
    //                     console.log(results)
    //                     resolve(results)
    //                 }
    //             }

    //         )
    //     })
    // }
}

//module.exports = new ValoresDao(bd)
const bd = require('../infra/sqlite-db');
const { STAFF_TABLE: TABLE} = require('../utils/appConfig')


class StaffDao {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

	saveStaff = (staff) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(
				`INSERT INTO ${TABLE} VALUES (?, ?, ?)`,
				staff.id,
				staff.nome,
				staff.cargo,
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

    getStaffById = (id) => {
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

    getAllStaff = () => {
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

	updateStaff = (id, staff) => {
        return new Promise((resolve, reject) => {
			this.dbConn.run(
				`UPDATE ${TABLE} SET nome = ?, cargo = ? WHERE id = ?`, 
				staff.nome,
				staff.cargo,
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

    deleteStaff = (id) => {
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

module.exports = new StaffDao(bd)
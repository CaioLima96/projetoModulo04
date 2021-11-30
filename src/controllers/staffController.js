const StaffModel = require('../models/staffModel')
const StaffDao = require('../dao/staffDao')

const {staffDB} = require('../infra/bd')

class StaffController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        this.dbConn
            .getStaffById(req.params.id)
            .then((exp) => {
                res.send(exp)
            })
            .catch((error) => {
                res.send(error)
            })
    }

    index = (req, res) => {

        this.dbConn.getAllStaffs().then(
            (result) => {
                res.send(result)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }

    save = (req, res) => {
        const {id, nome, cargo} = req.body;

        const staff = new StaffModel(id, nome, cargo)

        this.dbConn
        .saveUser(staff)
        .then((staff) => {
            res.send(staff);
        })
        .catch((error) => {
            res.send(error);
        });
    }

    remove = (req, res) => {

        this.dbConn
        .deleteStaff(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
        
    }

    update = (req, res) => {
        const id = req.params.id;
        const content = req.body;
    
        this.dbConn
          .updateStaff(id, content)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.send(error);
          });
    }
}

module.exports = new StaffController(staffDB)
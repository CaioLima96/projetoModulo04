const paymentModel = require('../../models/paymentModel')
const paymentDao = require('../../dao/paymentDao')

const {paymentDB} = require('../../infra/bd')

class paymentController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        this.dbConn
            .getpeymentById(req.params.id)
            .then((exp) => {
                res.send(exp)
            })
            .catch((error) => {
                res.send(error)
            })
    }

    index = (req, res) => {

        this.dbConn.getAllpayments().then(
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
        const {id, idUser, idStaff, valorTotal} = req.body;

        const payment = new RoomModel(id, idUser, idStaff, valorTotal)

        this.dbConn
        .saveUser(payment)
        .then((payment) => {
            res.send(payment);
        })
        .catch((error) => {
            res.send(error);
        });
    }

    remove = (req, res) => {

        this.dbConn
        .deletePayment(req.params.id)
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
          .updatePayment(id, content)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.send(error);
          });
    }
}

module.exports = new paymentController(paymentDB)
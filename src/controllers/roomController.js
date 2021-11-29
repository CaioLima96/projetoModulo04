const RoomModel = require('../../models/roomModel')
const RoomDao = require('../../dao/roomDao')

const {roomDB} = require('../../infra/bd')

class RoomController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        this.dbConn
            .getRoomById(req.params.id)
            .then((exp) => {
                res.send(exp)
            })
            .catch((error) => {
                res.send(error)
            })
    }

    index = (req, res) => {

        this.dbConn.getAllRooms().then(
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
        const {id,tipo_de_quarto,nome_ou_numero, qtd_max_pessoas, andar, status} = req.body;

        const room = new RoomModel(id,tipo_de_quarto,nome_ou_numero, qtd_max_pessoas, andar, status)

        this.dbConn
        .saveUser(room)
        .then((room) => {
            res.send(room);
        })
        .catch((error) => {
            res.send(error);
        });
    }

    remove = (req, res) => {

        this.dbConn
        .deleteRoom(req.params.id)
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
          .updateRoom(id, content)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.send(error);
          });
    }
}

module.exports = new RoomController(RoomDB)
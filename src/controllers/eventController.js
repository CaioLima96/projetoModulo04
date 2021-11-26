const EventModel = require('../models/eventModel')
const EventDao = require('../dao/eventDao')

const {eventDB} = require('../infra/bd')

class EventController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        try {
            let event = await this.dbConn.getEventById(req.params.id)
            if(event.length == 0) {
                console.log("Evento não existe.")
                res.send("Evento não existe.")
                //return res.status(500).send("Usuário não existe.").json(error.message);
            } else {
                console.log(event,`\nRota GET "unica" feita com sucesso`)
                res.send(event,`\nRota GET "unica" feita com sucesso`)
                
            }
        } catch (error) {
            console.log('Erro da requisição: ' + error)
            res.json(error)

            //return res.status(500).json(error.message);

        }

        // this.dbConn.forEach((event) => {
        //     if(event.id == req.params.id) {
        //         console.log(event,`\nRota GET "unica" feita com sucesso`)
        //         res.send(event)
        //     }
        // })
    }

    index = (req, res) => {
        this.dbConn.getAllEvents().then(
            (result) => {
                res.send(result)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )

        //res.send(this.dbConn)
    }

    save = (req, res) => {
        const {nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, id_booking, id_user } = req.body;

        const event = new EventModel(nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, id_booking, id_user)

        this.dbConn
        .saveEvent(event)
        .then((event) => {
            res.send(event);
        })
        .catch((error) => {
            res.send(error);
        });

        // this.dbConn.push(event)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = (req, res) => {
        this.dbConn
        .deleteEvent(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
        
        // const id = req.params.id
        // this.dbConn = this.dbConn.filter((i) => {
            
        //     return i.id !== id;
        // })
        // res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = (req, res) => {
        const id = req.params.id;
        const content = req.body;
    
        this.dbConn
        .updateEvent(id, content)
        .then((result) => {
        res.send(result);
        })
        .catch((error) => {
        res.send(error);
        });

        // const id = req.params.id
        // const content = req.body

        // for (let i =0; i < this.dbConn.length; i++) {
        //     if(this.dbConn[i].id = id) {
        //         this.dbConn[i] = content
        //     }
        // }
        // res.send(`Task: ${id} modificado com sucesso`)
    }
}

module.exports = new EventController(eventDB)
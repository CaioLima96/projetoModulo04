const RoomModel = require('../models/roomModel')
const RoomDao = require('../dao/roomDao')

const {roomDB} = require('../infra/bd')

class RoomController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let roomShow = await this.dbConn.getEventById(req.params.id)

            if(eventShow.length == 0) {
                
                console.log("Quarto não existe.")
                res.status(500).send({mensagem: "QUarto não existe."})

            } else {

                console.log(roomtShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: roomShow, menssagem: "Quarto retornado com sucesso"})
                
            }

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)

        }

        // this.dbConn.forEach((event) => {
        //     if(event.id == req.params.id) {
        //         console.log(event,`\nRota GET "unica" feita com sucesso`)
        //         res.send(event)
        //     }
        // })
    }

    index = async (req, res) => {

        try {
            
            let roomIndex = await this.dbConn.getAllEvents()
            
            res.status(200).send({data: roomIndex, mensagem: "Quartos retornados com sucesso"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {tipo_de_quarto, nome_ou_numero, qtd_max_pessoas, andar, status } = req.body;

        const room = new RoomModel(tipo_de_quarto, nome_ou_numero, qtd_max_pessoas, andar, status)

        try {
            
            await this.dbConn.saveRoom(room)

            res.status(201).send({menssage: "Quarto salvo com sucesso"})

        } catch (error) {
            
            console.log('Erro da requisição: ' + error)

            res.status(500).json(error)

        }

        // this.dbConn.push(event)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteRoom(req.params.id)

            res.status(200).send({ mensagem: "Quarto apagado com sucesso"})

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)

        }
        
        // const id = req.params.id
        // this.dbConn = this.dbConn.filter((i) => {
            
        //     return i.id !== id;
        // })
        // res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = async (req, res) => {
        const id = req.params.id;
        const content = req.body;

        try {
            
            let roomUpIndex = await this.dbConn.getRoomById(id)[0]

            // if(content.id == null ) {
            //     content.id = eventUpIndex.id
            // }
            if(content.tipo_de_quarto == null ) {
                content.tipo_de_quarto = roomUpIndex.tipo_de_quarto
            }
            if(content.nome_ou_numero == null ) {
                content.nome_ou_numero = roomUpIndex.nome_ou_numero
            }
            if(content.qtd_max_pessoas == null ) {
                content.qtd_max_pessoas = roomUpIndex.qtd_max_pessoas
            }
            if(content.andar == null ) {
                content.andar = roomUpIndex.andar
            }
            if(content.status == null ) {
                content.status = roomUpIndex.status
            }

            await this.dbConn.updateRoom(id, content)

            res.status(200).send({ mensagem: "Quarto atualizado com sucesso"})

        } catch (error) {

            res.status(500).json(error)

        }

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

module.exports = new RoomController(roomDB)
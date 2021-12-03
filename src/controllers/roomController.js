const RoomModel = require('../models/roomModel')
const RoomDao = require('../dao/roomDao')
const {roomMemoryDB} = require('../infra/bd')

class RoomController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    save = async (req, res) => {
        const {tipo_de_quarto, numero, qtd_max_pessoas, andar, status, valor_quarto } = req.body;

        const room = new RoomModel(tipo_de_quarto, numero, qtd_max_pessoas, andar, status, valor_quarto)

        try {
            
            await this.dbConn.saveRoom(room)

            res.status(201).send({menssagem: "Quarto salvo com sucesso"})

        } catch (error) {

            res.status(500).json(error)
        }

        // this.dbConn.push(room)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }
    
    show = async (req, res) => {

        try {

            let roomShow = await this.dbConn.getRoomById(req.params.id)

            if(roomShow.length == 0) {
                
                res.status(500).send({mensagem: "Quarto não existe."})

            } else {

                res.status(200).send(roomShow)
                
            }

        } catch (error) {

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
            
            let roomIndex = await this.dbConn.getAllRooms()
            
            res.status(200).send(roomIndex)
            
        } catch (error) {

            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    update = async (req, res) => {
        const id = req.params.id;
        const content = req.body;

        try {
            
            let roomUpIndex = await this.dbConn.getRoomById(id)[0]

            if(content.tipo_de_quarto == null ) {
                content.tipo_de_quarto = roomUpIndex.tipo_de_quarto
            }
            if(content.numero == null ) {
                content.numero = roomUpIndex.numero
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
            if(content.valor_quarto == null ) {
                content.valor_quarto = roomUpIndex.valor_quarto
            }

            await this.dbConn.updateRoom(id, content)

            res.status(200).send({ mensagem: "Quarto atualizado com sucesso"})

        } catch (error) {

            res.status(500).json(error)

        }

        // let roomObj = {
        //     id: id,
        //     tipo_de_quarto: content.tipo_de_quarto,
        //     numero: content.numero,
        //     qtd_max_pessoas: content.qtd_max_pessoas,
        //     andar: content.andar,
        //     status: content.status,
        //     valor_quarto: content.valor_quarto
        // }

        // for (let i =0; i < this.dbConn.length; i++) {
        //     if(this.dbConn[i].id === id) {
        //         this.dbConn[i] = roomObj
        //     }
        // }
        // res.send(`Room: ${id} modificado com sucesso`)
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn.deleteRoom(req.params.id)

            res.status(200).send({mensagem: "Quarto apagado com sucesso"})

        } catch (error) {

            res.status(500).json(error)
        }
        
        // const id = req.params.id
        // this.dbConn = this.dbConn.filter((i) => {
            
        //     return i.id !== id;
        // })
        // res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    
}

module.exports = new RoomController(RoomDao)
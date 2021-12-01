const EventModel = require('../models/eventModel')
const EventDao = require('../dao/eventDao')

const {eventDB} = require('../infra/bd')

class EventController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let eventShow = await this.dbConn.getEventById(req.params.id)

            if(eventShow.length == 0) {
                
                console.log("Evento não existe.")
                res.status(500).send({mensagem: "Evento não existe."})

            } else {

                console.log(eventShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: eventShow, menssagem: "Evento retornado com sucesso"})
                
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
            
            let eventIndex = await this.dbConn.getAllEvents()
            
            res.status(200).send({data: eventIndex, mensagem: "Eventos retornados com sucesso"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, duracao, local_event } = req.body;

        const event = new EventModel(nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, duracao, local_event)

        try {
            
            await this.dbConn.saveEvent(event)

            res.status(201).send({menssage: "Usuário salvo com sucesso"})

        } catch (error) {
            
            console.log('Erro da requisição: ' + error)

            res.status(500).json(error)

        }

        // this.dbConn.push(event)
        // res.send("Rota POST de evento ativada: evento adicionado ao banco de dados")
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteEvent(req.params.id)

            res.status(200).send({ mensagem: "Evento apagado com sucesso"})

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

        // try {
            
        //     let eventUpIndex = await this.dbConn.getEventById(id)[0]

        //     if(content.nome == null ) {
        //         content.nome = eventUpIndex.nome
        //     }
        //     if(content.data_inicio == null ) {
        //         content.data_inicio = eventUpIndex.data_inicio
        //     }
        //     if(content.data_fim == null ) {
        //         content.data_fim = eventUpIndex.data_fim
        //     }
        //     if(content.qtd_pessoas == null ) {
        //         content.qtd_pessoas = eventUpIndex.qtd_pessoas
        //     }
        //     if(content.valor_event == null ) {
        //         content.valor_event = eventUpIndex.valor_event
        //     }
        //     if(content.faixa_etaria == null ) {
        //         content.faixa_etaria = eventUpIndex.faixa_etaria
        //     }
        //     if(content.descricao == null ) {
        //         content.descricao = eventUpIndex.descricao
        //     }
        //     if(content.duracao == null){
        //         content.duracao = eventUpIndex.duracao
        //     }
        //     if(content.local_event == null ) {
        //         content.local_event = eventUpIndex.local_event
        //     }

        //     await this.dbConn.updateEvent(id, content)

        //     res.status(200).send({ mensagem: "Evento atualizado com sucesso"})

        // } catch (error) {

        //     res.status(500).json(error)

        // }

        let eventObj = {
            id: id,
            nome: content.nome,
            data_inicio: content.data_inicio,
            data_fim: content.data_fim,
            qtd_pessoas: content.qtd_pessoas,
            valor_event: content.valor_event,
            faixa_etaria: content.faixa_etaria,
            descricao: content.descricao,
            duracao: content.duracao,
            local_event: content.local_event
        }
        
        for (let i =0; i < this.dbConn.length; i++) {
            if(this.dbConn[i].id = id) {
                this.dbConn[i] = eventObj
            }
        }
        res.send(`Task: ${id} modificado com sucesso`)
    }
}

module.exports = new EventController(eventDB)
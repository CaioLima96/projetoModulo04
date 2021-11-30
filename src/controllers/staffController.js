const StaffModel = require('../models/staffModel')
const StaffDao = require('../dao/staffDao')

const {staffDB} = require('../infra/bd')

class StaffController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let staffShow = await this.dbConn.getStaffById(req.params.id)

            if(staffShow.length == 0) {
                
                console.log("Funcionário não existente")
                res.status(500).send({mensagem: "Funcionário não existente."})

            } else {

                console.log(staffShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: staffShow, menssagem: "Funcionário encontrado!"})
                
            }

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)

        }

        // this.dbConn.forEach((staff) => {
        //     if(staff.id == req.params.id) {
        //         console.log(event,`\nRota GET "unica" feita com sucesso`)
        //         res.send(staff)
        //     }
        // })
    }

    index = async (req, res) => {

        try {
            
            let staffIndex = await this.dbConn.getAllEvents()
            
            res.status(200).send({data: staffIndex, mensagem: "Funcionários retornados!"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {id, nome, cargo} = req.body;

        const staff = new staffModel(id, nome, cargo)

        try {
            
            await this.dbConn.saveStaff(staff)

            res.status(201).send({menssage: "Funcionário cadastrado com sucesso!"})

        } catch (error) {
            
            console.log('Erro da requisição: ' + error)

            res.status(500).json(error)

        }

        // this.dbConn.push(staff)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteStaff(req.params.id)

            res.status(200).send({ mensagem: "Funcinário apagado"})

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
            
            let staffUpIndex = await this.dbConn.getStaffById(id)[0]

            // if(content.id == null ) {
            //     content.id = eventUpIndex.id
            // }

            if(content.nome == null ) {
                content.nome = eventUpIndex.nome
            }
            if(content.cargo == null ) {
                content.cargo = eventUpIndex.cargo
            }

            await this.dbConn.updateStaff(id, content)

            res.status(200).send({ mensagem: "Informações do Funciionários atualizadas"})

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

module.exports = new StaffController(staffDB)
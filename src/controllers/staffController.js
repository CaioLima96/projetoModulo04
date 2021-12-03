const StaffModel = require('../models/staffModel')
const StaffDao = require('../dao/staffDao')
const {staffMemoryDB} = require('../infra/bd')

class StaffController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    save = async (req, res) => {

        const {nome, cargo} = req.body;

        const staff = new StaffModel(nome, cargo)

        try {
            
            await this.dbConn.saveStaff(staff)

            res.status(201).send({mensagem: "Funcionário cadastrado com sucesso!"})

        } catch (error) {

            res.status(500).json(error)
        }

        // this.dbConn.push(staff)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    show = async (req, res) => {

        try {

            let staffShow = await this.dbConn.getStaffById(req.params.id)

            if(staffShow.length == 0) {

                res.status(500).send({mensagem: "Funcionário não existe."})

            } else {

                res.status(200).send(staffShow)
            }

        } catch (error) {

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
            
            let staffIndex = await this.dbConn.getAllStaff()
            
            res.status(200).send(staffIndex)
            
        } catch (error) {

            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    update = async (req, res) => {
        const id = req.params.id;
        const content = req.body;

        try {
            
            let staffUpIndex = await this.dbConn.getStaffById(id)[0]

            if(content.nome == null ) {
                content.nome = staffUpIndex.nome
            }
            if(content.cargo == null ) {
                content.cargo = staffUpIndex.cargo
            }

            await this.dbConn.updateStaff(id, content)

            res.status(200).send({mensagem: "Funcionário atualizado com sucesso."})

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

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteStaff(req.params.id)

            res.status(200).send({mensagem: "Funcinário apagado"})

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

module.exports = new StaffController(StaffDao)
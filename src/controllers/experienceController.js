const ExperienceModel = require('../models/experienceModel')
const ExperienceDao = require('../dao/experienceDao')

const {experienceDB} = require('../infra/bd')

class ExperienceController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {
        
        // try {

        //     let expShow = await this.dbConn.getExperienceById(req.params.id)

        //     if(expShow.length == 0) {

        //         console.log("Experiência não existe.")
        //         res.status(500).send({mensagem: "Experiência não existe."})

        //     } else {

        //         console.log(expShow,`\nRota GET "unica" feita com sucesso`)

        //         res.status(200).send({data: expShow, menssagem: "Evento retornado com sucesso"})
                
        //     }
        // } catch (error) {

        //     console.log('Erro da requisição: ' + error)
        //     res.status(500).json(error)

        // }

        this.dbConn.forEach((exp) => {
            if(exp.id == req.params.id) {
                console.log(exp,`\nRota GET "unica" feita com sucesso`)
                res.send(exp)
            }
        })
    }

    index = async (req, res) => {

        // try {
            
        //     let expIndex = await this.dbConn.getAllExperiences()

        //     res.status(200).send({data: expIndex, mensagem: "Experiências retornadas com sucesso"})

        // } catch (error) {
            
        //     console.log('Erro da requisição: ' + error)
        //     res.status(500).json(error)
        // }

        res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {nome, valor_exp, id_booking, horario,duracao, local, dia_semana, qtd_pessoas, descricao} = req.body;

        const experience = new ExperienceModel(nome, valor_exp, id_booking, horario,duracao, local, dia_semana, qtd_pessoas, descricao)

        // try {
            
        //     await this.dbConn.saveExperience(experience)

        //     res.status(201).send({menssage: "Experiência salva com sucesso"})

        // } catch (error) {
            
        //     console.log('Erro da requisição: ' + error)

        //     res.status(500).json(error)

        // }

        this.dbConn.push(experience)
        res.send("Rota POST de experiência ativada: experiência adicionada ao banco de dados")
    }

    remove = async (req, res) => {

        // try {
            
        //     await this.dbConn.deleteExperience(req.params.id)

        //     res.status(200).send({ mensagem: "Experiência apagada com sucesso"})

        // } catch (error) {
            
        //     console.log('Erro da requisição: ' + error)
        //     res.status(500).json(error)

        // }
        
        const id = req.params.id
        this.dbConn = this.dbConn.filter((i) => {
            
            return i.id !== id;
        })
        res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = async (req, res) => {
        const id = req.params.id;
        const content = req.body;
        
        // try {
            
        //     let expUpIndex = await this.dbConn.getExperienceById(id)[0]

        //     if(content.nome == null){
        //         content.nome = expUpIndex.nome
        //     }
        //     if(content.valor_exp == null) {
        //         content.valor_exp = expUpIndex.valor_exp
        //     }
        //     if(content.id_booking == null) {
        //         content.id_booking = expUpIndex.id_booking
        //     }
        //     if(content.horario == null) {
        //         content.horario = expUpIndex.horario
        //     }
        //     if(content.duracao == null) {
        //         content.duracao = expUpIndex.duracao
        //     }
        //     if(content.local == null) {
        //         content.local = expUpIndex.local
        //     }
        //     if(content.dia_semana == null) {
        //         content.dia_semana = expUpIndex.dia_semana
        //     }
        //     if(content.qtd_pessoas == null) {
        //         content.qtd_pessoas = expUpIndex.qtd_pessoas
        //     }
        //     if(content.descricao == null) {
        //         content.descricao = expUpIndex.descricao
        //     }

        //     await this.dbConn.updateExperience(id, content)

        //     res.status(200).send({ mensagem: "Experiência atualizada com sucesso"})

        // } catch (error) {
            
        //     res.status(500).json(error)

        // }

        // const id = req.params.id
        // const content = req.body

        let experienceObj = {
            id: id,
            nome: content.nome,
            valor_exp: content.valor_exp,
            id_booking: content.id_booking,
            horario: content.horario,
            duracao: content.duracao,
            local: content.local,
            dia_semana: content.dia_semana,
            qtd_pessoas: content.qtd_pessoas,
            descricao: content.descricao
        }

        for (let i =0; i < this.dbConn.length; i++) {
            if(this.dbConn[i].id === id) {
                this.dbConn[i] = experienceObj
            }
        }

        res.send(`Experience: ${id} modificado com sucesso`)
    }
}

module.exports = new ExperienceController(experienceDB)
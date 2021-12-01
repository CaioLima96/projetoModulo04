const UserModel = require('../models/userModel')
const UserDao = require('../dao/userDao')

const {usersDB} = require('../infra/bd')

class userController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let userShow = await this.dbConn.getUserById(req.params.id)

            if(userShow.length == 0) {
                
                console.log("Pagamento não encontrado.")
                res.status(500).send({mensagem: "Pagamento não encontrado."})

            } else {

                console.log(userShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: userShow, menssagem: "Pagamento encontrado!"})
                
            }

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)

        }

        // this.dbConn.forEach((payment) => {
        //     if(payment.id == req.params.id) {
        //         console.log(payment,`\nRota GET "unica" feita com sucesso`)
        //         res.send(payment)
        //     }
        // })
    }

    index = async (req, res) => {

        try {
            
            let userIndex = await this.dbConn.getAllUsers()
            
            res.status(200).send({data: userIndex, mensagem: "Usuário retornados com sucesso"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {nome, email, senha, CPF, id_adress} = req.body;

        const user = new UserModel(nome, email, senha, CPF, id_adress)

        try {
            
            await this.dbConn.saveUser(user)

            res.status(201).send({menssage: "Usuário cadastrado com sucesso!"})

        } catch (error) {
            
            console.log('Erro da requisição: ' + error)

            res.status(500).json(error)

        }

        // this.dbConn.push(payment)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteUser(req.params.id)

            res.status(200).send({ mensagem: "Usuário apagado"})

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
            
        //     let userUpIndex = await this.dbConn.getUserById(id)[0]

        //     if(content.nome == null ) {
        //         content.nome = userUpIndex.nome
        //     }
        //     if(content.email == null ) {
        //         content.email = userUpIndex.email
        //     }
        //     if(content.senha == null ) {
        //         content.senha= userUpIndex.senha
        //     }
        //     if(content.CPF == null ) {
        //         content.CPF = userUpIndex.CPF
        //     }
        //     if(content.id_endereco == null ) {
        //         content.id_endereco = userUpIndex.id_endereco
        //     }

        //     await this.dbConn.userPayment(id, content)

        //     res.status(200).send({ mensagem: "Usuário atualizado com sucesso!"})

        // } catch (error) {

        //     res.status(500).json(error)

        // }

       
        let userObj = {
            id: id,
            nome: content.nome,
            email: content.email,
            senha: content.senha,
            CPF: content.CPF,
            id_adress: content.id_adress
        }

        for (let i =0; i < this.dbConn.length; i++) {
            if(this.dbConn[i].id === id) {
                this.dbConn[i] = userObj;
            }
        }
        res.send(`Task: ${id} modificado com sucesso`)
    }
}

module.exports = new userController(usersDB)
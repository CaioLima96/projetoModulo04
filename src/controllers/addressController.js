const AddressModel = require('../models/addressModel')
const AddressDao = require('../dao/addressDao')

const {addressDB} = require('../infra/bd')

class AddressController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let addressShow = await this.dbConn.getAddressById(req.params.id)

            if(addressShow.length == 0) {
                
                console.log("O endereço não existe.")
                res.status(500).send({mensagem: "O endereço não existe."})

            } else {

                console.log(addressShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: addressShow, menssagem: "Endereço retornado com sucesso"})
                
            }

        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)

        }

        // this.dbConn.forEach((address) => {
        //     if(address.id == req.params.id) {
        //         console.log(address,`\nRota GET "unica" feita com sucesso`)
        //         res.send(address)
        //     }
        // })
    }

    index = async (req, res) => {

        try {
            
            let addressIndex = await this.dbConn.getAllAddress()
            
            res.status(200).send({data: addressIndex, mensagem: "Endereço retornado com sucesso"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {cep, logradouro, numero, complemento, bairro, cidade, estado, pais } = req.body;

        const address = new AddressModel(cep, logradouro, numero, complemento, bairro, cidade, estado, pais)

        try {
            
            await this.dbConn.saveAddress(address)

            res.status(201).send({menssage: "Endereço salvo com sucesso"})

        } catch (error) {
            
            console.log('Erro da requisição: ' + error)

            res.status(500).json(error)

        }

        // this.dbConn.push(address)
        // res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = async (req, res) => {

        try {
            
            await this.dbConn
            .deleteAddress(req.params.id)

            res.status(200).send({ mensagem: "Endereço apagado com sucesso"})

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
            
            let addressUpIndex = await this.dbConn.getAddressById(id)[0]

            // if(content.id == null ) {
            //     content.id = addressUpIndex.id
            // }
            if(content.cep == null ) {
                content.cep = addressUpIndex.cep
            }
            if(content.logradouro == null ) {
                content.logradouro = addressUpIndex.logradouro
            }
            if(content.numero == null ) {
                content.numero = addressUpIndex.numero
            }
            if(content.complemento == null ) {
                content.complemento = addressUpIndex.complemento
            }
            if(content.bairro == null ) {
                content.bairro = addressUpIndex.bairro
            }
            if(content.cidade == null ) {
                content.cidade = addressUpIndex.cidade
            }
            if(content.estado == null ) {
                content.estado = addressUpIndex.estado
            }
            if(content.pais == null ) {
                content.pais = addressUpIndex.pais
            }

            await this.dbConn.updateAddress(id, content)

            res.status(200).send({ mensagem: "Endereço atualizado com sucesso"})

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

module.exports = new AddressController(addressDB)
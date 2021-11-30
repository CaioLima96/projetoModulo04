const PaymentModel = require('../models/paymentModel')
const PaymentDao = require('../dao/paymentDao')

const {paymentDB} = require('../infra/bd')

class PaymentController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = async (req, res) => {

        try {

            let paymentShow = await this.dbConn.getEventById(req.params.id)

            if(paymentShow.length == 0) {
                
                console.log("Pagamento não encontrado.")
                res.status(500).send({mensagem: "Pagamento não encontrado."})

            } else {

                console.log(paymentShow,`\nRota GET "unica" feita com sucesso`)

                res.status(200).send({data: paymentShow, menssagem: "Pagamento encontrado!"})
                
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
            
            let paymentIndex = await this.dbConn.getAllEvents()
            
            res.status(200).send({data: paymentIndex, mensagem: "Eventos retornados com sucesso"})
            
        } catch (error) {

            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)
        }


        //res.send(this.dbConn)
    }

    save = async (req, res) => {
        const {id, id_user, id_staff, valor_total} = req.body;

        const payment = new paymentModel(id, id_user, id_staff, valor_total)

        try {
            
            await this.dbConn.savePayment(payment)

            res.status(201).send({menssage: "Pagamento efetuado com sucesso!"})

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
            .deletePayment(req.params.id)

            res.status(200).send({ mensagem: "Pagamento apagado"})

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
            
            let paymentUpIndex = await this.dbConn.getPaymentById(id)[0]

            // if(content.id == null ) {
            //     content.id = eventUpIndex.id
            // }
            if(content.id == null ) {
                content.id = paymentUpIndex.id
            }
            if(content.id_user == null ) {
                content.id_user = paymentUpIndex.id_user
            }
            if(content.id_staff == null ) {
                content.id_staff= paymentUpIndex.id_staff
            }
            if(content.valor_total == null ) {
                content.valor_total = paymentUpIndex.valor_total
            }

            await this.dbConn.updatePayment(id, content)

            res.status(200).send({ mensagem: "Pagamento atualizado com sucesso!"})

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

module.exports = new PaymentController(paymentDB)
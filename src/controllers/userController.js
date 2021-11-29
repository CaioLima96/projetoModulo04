const UserModel = require('../../models/userModel')
const UserDao = require('../../dao/userDao')

const {usersDB} = require('../../infra/bd')

class userController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }
    show = async (req, res) => {   
        try {
            let user = await this.dbConn.getUserById(req.params.id)
            if(!user) {
          //if(user.length == 0) {    
                console.log("Usuário não existe.")
                res.send("Usuário não existe.")
                //return res.status(500).send("Usuário não existe.").json(error.message);
                //return res.status(404).send("Usuário não existe.").json(error.message);
            } else {
                res.send(user)
                
            }
        } catch (error) {
            console.log('Erro da requisição: ' + error)
            res.status(500).json(error)


        }

            // this.dbConn.forEach((exp) => {
            //     if(exp.id == req.params.id) {
            //         console.log(exp,`\nRota GET "unica" feita com sucesso`)
            //         res.send(exp)
            //     }
            // })
    }

    index = (req, res) => {

        // this.dbConn.getAllExperiences().then(
        //     (result) => {
        //         res.send(result)
        //     }
        // ).catch(
        //     (error) => {
        //         res.send(error)
        //     }
        // )

        res.send(this.dbConn)
    }

    save = (req, res) => {
        const {nome, valor_exp, id_booking, id_user,duracao, local, data, qtd_pessoas } = req.body;

        const experience = new ExperienceModel(nome, valor_exp, id_booking, id_user,duracao, local, data, qtd_pessoas)

        // this.dbConn
        // .saveUser(experience)
        // .then((experience) => {
        //     res.send(experience);
        // })
        // .catch((error) => {
        //     res.send(error);
        // });

        this.dbConn.push(experience)
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }

    remove = (req, res) => {

        // this.dbConn
        // .deleteExperience(req.params.id)
        // .then((result) => {
        //     res.send(result);
        // })
        // .catch((error) => {
        //     res.send(error);
        // });
        
        const id = req.params.id
        this.dbConn = this.dbConn.filter((i) => {
            
            return i.id !== id;
        })
        //console.log(i)
        res.send(`Menssagem: ${id} apagado com sucesso`)
    }

    update = (req, res) => {
        // const id = req.params.id;
        // const content = req.body;
    
        // this.dbConn
        //   .updateExperience(id, content)
        //   .then((result) => {
        //     res.send(result);
        //   })
        //   .catch((error) => {
        //     res.send(error);
        //   });

        const id = req.params.id
        const content = req.body

        for (let i =0; i < this.dbConn.length; i++) {
            if(this.dbConn[i].id = id) {
                this.dbConn[i] = content
            }
        }

        res.send(`Task: ${id} modificado com sucesso`)
    }
}

module.exports = new ExperienceController(experienceDB)

module.exports = new paymentController(paymentDB)
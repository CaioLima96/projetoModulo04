const ExperienceModel = require('../../models/experienceModel')
const ExperienceDao = require('../../dao/experienceDao')

const {experienceDB} = require('../../infra/bd')

class ExperienceController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {
        this.dbConn
            .getExperienceById(req.params.id)
            .then((exp) => {
                res.send(exp)
            })
            .catch((error) => {
                res.send(error)
            })
    }

    // show = (req, res) => {
    //     this.dbConn.forEach((exp) => {
    //         if(exp.id == req.params.id) {
    //             console.log(exp,`\nRota GET "unica" feita com sucesso`)
    //             res.send(exp)
    //         }
    //     })
    // }

    index = (req, res) => {

        this.dbConn.getAllExperiences().then(
            (result) => {
                res.send(result)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }

    save = (req, res) => {
        const { id,nome, valor_exp, id_booking, id_user,duracao, local, data, qtd_pessoas } = req.body;

        const experience = new ExperienceModel(id,nome, valor_exp, id_booking, id_user,duracao, local, data, qtd_pessoas)

        this.dbConn
        .saveUser(experience)
        .then((experience) => {
            res.send(experience);
        })
        .catch((error) => {
            res.send(error);
        });
    }

    remove = (req, res) => {

        this.dbConn
        .deleteExperience(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
        
    }

    update = (req, res) => {
        const id = req.params.id;
        const content = req.body;
    
        this.dbConn
          .updateExperience(id, content)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.send(error);
          });
    }
}

module.exports = new ExperienceController(experienceDB)
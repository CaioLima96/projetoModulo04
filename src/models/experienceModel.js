const { v4: uuid } = require("uuid");

class ExperienceModel {
    constructor(nome, valor_exp, horario, duracao, local_experience, dia_semana, qtd_pessoas, descricao) {
        this.id = uuid(),
        this.nome = nome,
        this.valor_exp = valor_exp,
        this.horario = horario,
        this.duracao = duracao,
        this.local_experience = local_experience,
        this.dia_semana = dia_semana,
        this.qtd_pessoas = qtd_pessoas
        this.descricao = descricao
    }
}

module.exports = ExperienceModel
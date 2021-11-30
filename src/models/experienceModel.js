const { v4: uuid } = require("uuid");

class ExperienceModel {
    constructor(nome, valor_exp, id_booking, horario, duracao, local, dia_semana, qtd_pessoas, descricao) {
        this.id = uuid(),
        this.nome = nome,
        this.valor_exp = valor_exp,
        this.id_booking = id_booking,
        this.horario = horario,
        this.duracao = duracao,
        this.local = local,
        this.dia_semana = dia_semana,
        this.qtd_pessoas = qtd_pessoas
        this.descricao = descricao
    }
}

module.exports = ExperienceModel
const { v4: uuid } = require("uuid");

class ExperienceModel {
    constructor(nome, valor_exp, id_booking, id_user, duracao, local, data, qtd_pessoas) {
        this.id = uuid(),
        this.nome = nome,
        this.valor_exp = valor_exp,
        this.id_booking = id_booking,
        this.id_user = id_user,
        this.duracao = duracao,
        this.local = local,
        this.data = data,
        this.qtd_pessoas = qtd_pessoas
    }
}

module.exports = ExperienceModel
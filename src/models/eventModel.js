const { v4: uuid } = require("uuid");

class EventModel {
    constructor(nome, data_inicio, data_fim, qtd_pessoas, valor_event, faixa_etaria, descricao, id_booking, id_user) {
        this.id = uuid(),
        this.nome = nome,
        this.data_inicio = data_inicio,
        this.data_fim = data_fim,
        this.qtd_pessoas = qtd_pessoas,
        this.valor_event = valor_event,
        this.faixa_etaria = faixa_etaria,
        this.descricao = descricao,
        this.id_booking = id_booking,
        this.id_user = id_user
    }
}

module.exports = EventModel

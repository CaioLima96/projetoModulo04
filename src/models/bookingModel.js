const { v4: uuid } = require("uuid");

class BookingModel {
    constructor(id_user, id_room, qtd_pessoas, data_entrada, data_saida, user_event_id, user_experience_id, valor_total) {
        this.id = uuid(),
        this.id_user = id_user,
        this.id_room = id_room,
        this.qtd_pessoas = qtd_pessoas,
        this.data_entrada = data_entrada,
        this.data_saida = data_saida,
        this.user_event_id = user_event_id,
        this.user_experience_id = user_experience_id,
        this.valor_total = valor_total
    }
}

module.exports = BookingModel
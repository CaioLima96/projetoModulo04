const { v4: uuid } = require("uuid");
//const ValorDao = require("../dao/valoresDao")

class BookingModel {
    constructor(id_user, id_room, qtd_pessoas, data_entrada, data_saida, valor_total) {
        this.id = uuid(),
        this.id_user = id_user,
        this.id_room = id_room,
        this.qtd_pessoas = qtd_pessoas,
        this.data_entrada = data_entrada,
        this.data_saida = data_saida,
        this.valor_total = valor_total
    }

}

module.exports = BookingModel
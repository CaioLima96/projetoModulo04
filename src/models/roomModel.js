const { v4: uuid } = require("uuid");

class RoomModel {
    constructor(tipo_de_quarto, numero, qtd_max_pessoas, andar, status, valor_quarto, url) {
        this.id = uuid(),
        this.tipo_de_quarto = tipo_de_quarto,
        this.numero = numero,
        this.qtd_max_pessoas = qtd_max_pessoas,
        this.andar = andar,
        this.status = status,
        this.valor_quarto = valor_quarto
        this.url = url
    }
}

module.exports = RoomModel
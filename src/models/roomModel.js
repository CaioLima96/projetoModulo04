const { v4: uuid } = require("uuid");

class RoomModel {
    constructor(tipo_de_quarto, nome_ou_numero, qtd_max_pessoas, andar, status) {
        this.id = uuid(),
        this.tipo_de_quarto = tipo_de_quarto,
        this.nome_ou_numero = nome_ou_numero,
        this.qtd_max_pessoas = qtd_max_pessoas,
        this.andar = andar,
        this.status = status
    }
}

module.exports = RoomModel
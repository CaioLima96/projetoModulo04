const { v4: uuid } = require("uuid");

class AddressModel {
    constructor( cep, logradouro, numero, complemento, bairro, cidade, estado, pais) {
        this.id = uuid(),
        this.cep = cep,
        this.logradouro = logradouro,
        this.numero = numero,
        this.complemento = complemento,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado,
        this.pais = pais
    }
}

module.exports = AddressModel
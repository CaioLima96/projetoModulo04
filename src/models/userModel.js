const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");


class UserModel {
    constructor(nome,email,senha,CPF,id_address) {
            this.id = uuid(),
            this.nome = nome,
            this.email = email,
            this.senha = sha256(senha),
            this.CPF = CPF,
            this.id_address = id_address
    }
}

module.exports = UserModel;
const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");


class UserModel {
    constructor(nome,email,senha,CPF,id_adress) {
            this.id = uuid(),
            this.nome = nome,
            this.email = email,
            this.senha = sha256(senha),
            this.CPF = CPF,
            this.id_adress = id_adress
    }
}

module.exports = UserModel;
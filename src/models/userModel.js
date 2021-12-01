const { v4: uuid } = require("uuid");


class UserModel {
    constructor(nome,email,senha,CPF,id_adress) {
            this.id = uuid(),
            this.nome = nome,
            this.email = email,
            this.senha = senha,
            this.CPF = CPF,
            this.id_adress = id_adress
    }
}

module.exports = UserModel;
const { v4: uuid } = require("uuid");


class UserModel {
    constructor(nome,email,senha,CPF,id_endereco) {
            this.id = uuid(),
            this.nome = nome,
            this.email = email,
            this.senha = senha,
            this.CPF = CPF,
            this.id_endereco = id_endereco
    }
}

module.exports = UserModel;
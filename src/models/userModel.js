const { v4: uuid } = require("uuid");


class UserModel {
    constructor(nome,email,senha,CPF,Endereço,Cartao) {
            this.id = uuid(),
            this.nome = nome,
            this.email = email,
            this.senha = senha,
            this.CPF = CPF,
            this.Endereço = Endereço,
            this.Cartao = Cartao 
    }
}

module.exports = UserModel;
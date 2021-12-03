const { v4: uuid } = require("uuid");

class StaffModel {
    constructor(nome, cargo) {
        this.id = uuid(),
        this.nome = nome,
        this.cargo = cargo
    }
}

module.exports = StaffModel
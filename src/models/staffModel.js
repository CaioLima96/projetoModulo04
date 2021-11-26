const { v4: uuid } = require("uuid");

class StaffModel {
    constructor(id, nome, cargo) {
        this.id = uuid(),
        this.nome = nome,
        this.cargo = cargo
    }
}

module.exports = staffModel
const { v4: uuid } = require("uuid");

class PaymentModel {
    constructor(id, idUser, idStaff, valorTotal) {
            this.id = uuid(),
            this.idUser = idUser,
            this.idStaff = idStaff,
            this.valorTotal = valorTotal
    }
}

module.exports = PaymentModel
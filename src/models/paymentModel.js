const { v4: uuid } = require("uuid");

class PaymentModel {
    constructor(id, id_user, id_staff, valor_total) {
            this.id = uuid(),
            this.id_user = id_user,
            this.id_staff = id_staff,
            this.valor_total = valor_total
    }
}

module.exports = PaymentModel
const { v4: uuid } = require("uuid");

class PaymentModel {
    constructor( id_user, id_booking, id_staff, valor_total) {
            this.id = uuid(),
            this.id_user = id_user,
            this.id_booking = id_booking,
            this.id_staff = id_staff,
            this.valor_total = valor_total
    }
}

module.exports = PaymentModel
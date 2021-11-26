const { v4: uuid } = require("uuid");

class PaymentModel {
    constructor(forma_de_pagamento, bandeira_cartão, cupom_desconto, status) {
        this.id = uuid(),
        this.forma_de_pagamento = forma_de_pagamento,
        this.bandeira_cartão = bandeira_cartão,
        this.cupom_desconto = cupom_desconto,
        this.status = status
    }
}

module.exports = PaymentModel
const express = require("express");

const PaymentController = require("../controllers/paymentController");

const router = express.Router();

router.get("/:id", PaymentController.show);
router.get("/", PaymentController.index);
router.post("/", PaymentController.save);
router.put("/:id", PaymentController.update);
router.delete("/:id", PaymentController.remove);

module.exports = router;
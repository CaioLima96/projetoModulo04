const express = require("express");

const BookingController = require("../controllers/bookingController");

const router = express.Router();

router.get("/:id", BookingController.show);
router.get("/", BookingController.index);
router.post("/", BookingController.save);
router.put("/:id", BookingController.update);
router.delete("/:id", BookingController.remove);

module.exports = router;
const express = require("express");

const AddressController = require("../controllers/addressController");

const router = express.Router();

router.get("/:id", AddressController.show);
router.get("/", AddressController.index);
router.post("/", AddressController.save);
router.put("/:id", AddressController.update);
router.delete("/:id", AddressController.remove);

module.exports = router;
const express = require("express");

const StaffController = require("../controllers/staffController");

const router = express.Router();

router.get("/:id", StaffController.show);
router.get("/", StaffController.index);
router.post("/", StaffController.save);
router.put("/:id", StaffController.update);
router.delete("/:id", StaffController.remove);

module.exports = router;
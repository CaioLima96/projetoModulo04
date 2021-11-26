const express = require("express");

const Staffontroller = require("../controllers/staffController");

const router = express.Router();

router.get("/:id", StaffController.show);
router.get("/", Staffontroller.index);
router.post("/", Staffcontroller.save);
router.put("/:id", StaffController.update);
router.delete("/:id", StaffController.remove);

module.exports = router;
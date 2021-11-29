const express = require("express");

const EventController = require("../controllers/eventController");

const router = express.Router();

router.get("/:id", EventController.show);
router.get("/", EventController.index);
router.post("/", EventController.save);
router.put("/:id", EventController.update);
router.delete("/:id", EventController.remove);

module.exports = router;
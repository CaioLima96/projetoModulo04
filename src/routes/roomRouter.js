const express = require("express");

const RoomController = require("../controllers/roomController");

const router = express.Router();

router.get("/:id", RoomController.show);
router.get("/", RoomController.index);
router.post("/", RoomController.save);
router.put("/:id", RoomController.update);
router.delete("/:id", RoomController.remove);

module.exports = router;
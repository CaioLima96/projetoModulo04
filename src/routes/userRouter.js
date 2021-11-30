 const router = require("express").Router();

 const userController = require("../controllers/userController");

router.get("/:id", userController.show);
router.get("/", userController.index);
router.post("/", userController.save);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

 module.exports = router;
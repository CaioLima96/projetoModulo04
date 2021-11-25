const express = require("express");

const ExperienceController = require("../controllers/experienceController/experienceController");

const router = express.Router();

router.get("/:id", ExperienceController.show);
router.get("/", ExperienceController.index);
router.post("/", ExperienceController.save);
router.put("/:id", ExperienceController.update);
router.delete("/:id", ExperienceController.remove);

module.exports = router;
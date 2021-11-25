const express = require("express");
const router = express.Router();
const experienceRouter = require("./experienceRouter");


//middleware
router.use(express.json());

router.use((req, res) => {
    //*res.send('testando');  VAI PRO CONTROLLERS
})



// ROTAS
router.use("/experience", experienceRouter);

module.exports = router;







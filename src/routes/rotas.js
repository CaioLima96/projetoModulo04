const express = require("express");
const router = express.Router();


  //middleware
router.use(express.json());

router.use((req, res) => {
    //*res.send('testando');  VAI PRO CONTROLLERS
})


module.exports = router;







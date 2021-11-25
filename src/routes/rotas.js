const express = require("express");
const router = express.Router();
const experienceRouter = require("./experienceRouter");


//middleware
router.use(express.json());

router.use((req, res) => {
    //*res.send('testando');  VAI PRO CONTROLLERS
})

// ROTAS completas
router.use("/user", userRouter);
router.use("/booking", bookingRouter);
router.use("/payment", paymentRouter);
router.use("/staff", staffRouter);
router.use("/room", roomRouter);
router.use("/event", eventRouter);
router.use("/experience", experienceRouter);



module.exports = router;







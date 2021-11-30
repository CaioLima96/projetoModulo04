const express = require("express");
const router = express.Router();
const experienceRouter = require("./experienceRouter");
const roomRouter = require("./roomRouter");
const paymentRouter = require("./paymentRouter");
const eventRouter = require("./eventRouter");
const userRouter = require("./userRouter");
const staffRouter = require("./staffRouter");
//const bookingRouter = require("./bookingRouter");



// ROTAS
router.use("/experience", experienceRouter);
router.use("/room", roomRouter);
router.use("/payment", paymentRouter);
router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/staff", staffRouter);
//router.use("/booking", bookingRouter);



module.exports = router;







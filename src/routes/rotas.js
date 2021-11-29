const express = require("express");
const router = express.Router();
const experienceRouter = require("./experienceRouter");
const roomRouter = require("./roomRouter");
const paymentRouter = requiere("./paymentRouter");
const eventRouter = requiere("./eventRouter");
const userRouter = requiere("./userRouter");
const staffRouter = requiere("./staffRouter");
const bookingRouter = requiere("./bookingRouter");


//middleware
router.use((req, res, next) => {
    next();
    //*res.send('testando');  VAI PRO CONTROLLERS
})

router.use(express.json());

router.get("/", (req, res) => {
    res.send("hello world");
  });


// router.use((req, res, next) => {
//     console.log(req.headers.host, new Date().toLocaleTimeString());
//     next();
//   });
  
//   router.use(express.json());
  
//   router.get("/", (req, res) => {
//     res.send("hello world");
//   });


// ROTAS
router.use("/experience", experienceRouter);
router.use("/room", roomRouter);
router.use("/payment", paymentRouter);
router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/staff", staffRouter);
router.use("/booking", bookingRouter);



module.exports = router;







const express = require("express");
const router = express.Router();
const experienceRouter = require("./experienceRouter");


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
// router.use("/user", userRouter);
// router.use("/booking", bookingRouter);
// router.use("/payment", paymentRouter);
// router.use("/staff", staffRouter);
// router.use("/room", roomRouter);
// router.use("/event", eventRouter);
router.use("/experience", experienceRouter);



module.exports = router;







const express = require("express");
const router = express.Router();

const experienceRouter = require("./experienceRouter");
const roomRouter = require("./roomRouter");
const paymentRouter = require("./paymentRouter");
const eventRouter = require("./eventRouter");
const userRouter = require("./userRouter");
const staffRouter = require("./staffRouter");
const bookingRouter = require("./bookingRouter");
const addressRouter = require("./addressRouter");



// ROTAS

router.get("/", (req, res) => {
    res.send(
    `
        <h1>Bem vindo(a) à Api Hotel Resilia Palace!</h1>
        <ul>
            <li style="font-size: 1.25rem;">Para ver os usuários, basta por /user após o fim da url.</li>
            <br>
            <li style="font-size: 1.25rem;">Para ver os endereços, basta por /address após o fim da url.</li>

            <li></li>
            <li></li>
            <li></li>
        </ul>

        <br>

        <p><a href="https://github.com/CaioLima96/projetoModulo04" target="_blank">Repositório da api</a></p>

        <br>

        <p>Api criada por: Grupo 1 - Resilia</p

    `
    );
});

router.use("/experience", experienceRouter);
router.use("/room", roomRouter);
router.use("/payment", paymentRouter);
router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/staff", staffRouter);
router.use("/booking", bookingRouter);
router.use("/address", addressRouter);



module.exports = router;







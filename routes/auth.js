const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.post("/login",[

    check('correo','El correo es obligatoro').isEmail(),
    check('password','la contraseña es obligator').notEmpty(),
    validarCampos
],login);



module.exports = router;
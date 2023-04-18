const { Router } = require("express");
const { check } = require("express-validator");

const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require("../controllers/usuarios");

const { validarCampos } = require("../middlewares/validar-campos");
const { esRolValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");


const router = Router();

router.get("/", usuariosGet);

router.post("/",[
    check('nombre','el nombre es obligatorio').notEmpty(),
    check('password','el password es obligatorio y mas de 6 caracteres').isLength({min: 6}),
    check('correo','el correo no es valido').isEmail(),
    // check('rol','no es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('correo').custom( emailExiste),

    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPost);

router.put("/:id",[
    check( 'id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId ),
    validarCampos
], usuariosPut);

router.delete('/:id',[
    check( 'id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId ),
    validarCampos

], usuariosDelete);

module.exports = router;

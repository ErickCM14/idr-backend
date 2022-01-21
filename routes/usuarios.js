const router = require('express').Router();
const {
	crearUsuario,
	obtenerUsuarios,
	modificarPassword,
	iniciarSesion,
	envioEmailRestriccion
} = require('../controllers/usuarios');

const auth = require('./auth')

router.get('/', auth.requerido, obtenerUsuarios);
router.get('/:id', auth.requerido, obtenerUsuarios);
router.post('/', crearUsuario);
router.post('/entrar', iniciarSesion);
router.post('/usuario-restringido', envioEmailRestriccion);
router.put('/modificar', modificarPassword);

module.exports = router;
var express = require('express');
var { validateRut } = require('@fdograph/rut-utilities');

var router = express.Router();

router.post('/', (req, res) => {
    var { rut } = req.body;

    var esValido = validateRut(rut);
    res.json({
        valido: esValido,
    });
});

module.exports = router;

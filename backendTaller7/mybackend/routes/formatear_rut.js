var express = require('express');
var { formatRut, RutFormat } = require('@fdograph/rut-utilities');

var router = express.Router();

router.post('/', (req, res) => {
    var { rut } = req.body;

    var formateo = formatRut(rut, RutFormat.DOTS_DASH);
    res.json({
        rutformateado: formateo,
    });
});


module.exports = router;
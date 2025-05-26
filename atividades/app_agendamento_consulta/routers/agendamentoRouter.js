const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.get('/', agendamentoController.exibirFormulario);
router.post('/agendar', agendamentoController.processarAgendamento);

module.exports = router;

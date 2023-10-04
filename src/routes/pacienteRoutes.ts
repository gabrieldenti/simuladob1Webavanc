import express from 'express';
import * as pacienteController from '../controllers/pacienteController';

const router = express.Router();

router.post('/pacientes', pacienteController.criarPaciente);
router.get('/pacientes', pacienteController.obterPacientePorId);
router.get('/pacientes/:id', pacienteController.obterPacientePorId);
router.put('/pacientes/:id', pacienteController.atualizarPaciente);
router.delete('/pacientes/:id', pacienteController.excluirPaciente);

export default router;
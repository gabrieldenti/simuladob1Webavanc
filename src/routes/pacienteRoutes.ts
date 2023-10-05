import express from 'express';
import * as pacienteController from '../controllers/pacienteController';

const router = express.Router();

router.post('/', pacienteController.criarPaciente);
router.get('/:id', pacienteController.obterPacientePorId);
router.put('/:id', pacienteController.atualizarPaciente);
router.delete('/:id', pacienteController.excluirPaciente);

export default router;
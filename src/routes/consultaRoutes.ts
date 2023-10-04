import express from 'express';
import * as consultaController from '../controllers/consultaController';

const router = express.Router();

router.post('/', consultaController.criarConsulta);

router.get('/', consultaController.obterConsultaPorId);

router.get('/:id', consultaController.obterConsultaPorId);

router.put('/:id', consultaController.atualizarConsulta);

router.delete('/:id', consultaController.excluirConsulta);

export default router;
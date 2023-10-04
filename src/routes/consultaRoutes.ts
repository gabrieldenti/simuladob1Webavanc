import express from 'express';
import * as consultaController from '../controllers/consultaController';

const router = express.Router();

router.post('/consultas', consultaController.criarConsulta);
router.get('/consultas', consultaController.obterConsultaPorId);
router.get('/consultas/:id', consultaController.obterConsultaPorId);
router.put('/consultas/:id', consultaController.atualizarConsulta);
router.delete('/consultas/:id', consultaController.excluirConsulta);

export default router;
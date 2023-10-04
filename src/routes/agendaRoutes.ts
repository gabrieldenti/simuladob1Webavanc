import express from 'express';
import * as agendaController from '../controllers/agendaController';

const router = express.Router();

router.post('/', agendaController.criarAgenda);
router.get('/', agendaController.obterAgendaPorId);
router.get('//:id', agendaController.obterAgendaPorId);
router.put('//:id', agendaController.atualizarAgenda);
router.delete('//:id', agendaController.excluirAgenda);

export default router;
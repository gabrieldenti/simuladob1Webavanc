import express from 'express';
import * as agendaController from '../controllers/agendaController';

const router = express.Router();

router.post('/agendas', agendaController.criarAgenda);
router.get('/agendas', agendaController.obterAgendaPorId);
router.get('/agendas/:id', agendaController.obterAgendaPorId);
router.put('/agendas/:id', agendaController.atualizarAgenda);
router.delete('/agendas/:id', agendaController.excluirAgenda);

export default router;
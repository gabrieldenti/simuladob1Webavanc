import express from 'express';

import pacienteRoutes from './pacienteRoutes';
import consultaRoutes from './consultaRoutes';
import agendaRoutes from './agendaRoutes';
import secretariaRoutes from './secretariaRoutes';

export const router = express.Router();

router.use('/pacientes', pacienteRoutes);
router.use('/consultas', consultaRoutes);
router.use('/agendas', agendaRoutes);
router.use('/secretarias', secretariaRoutes);
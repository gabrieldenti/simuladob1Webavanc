import express from 'express';
import * as secretariaController from '../controllers/secretariaController';

const router = express.Router();

router.post('/secretarias', secretariaController.criarSecretaria);
router.get('/secretarias', secretariaController.obterSecretariaPorId);
router.get('/secretarias/:id', secretariaController.obterSecretariaPorId);
router.put('/secretarias/:id', secretariaController.atualizarSecretaria);
router.delete('/secretarias/:id', secretariaController.excluirSecretaria);

export default router;
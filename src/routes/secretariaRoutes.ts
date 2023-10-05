import express from 'express';
import * as secretariaController from '../controllers/secretariaController';

const router = express.Router();

router.post('/', secretariaController.criarSecretaria);
router.get('/:id', secretariaController.obterSecretariaPorId);
router.put('/:id', secretariaController.atualizarSecretaria);
router.delete('/:id', secretariaController.excluirSecretaria);

export default router;
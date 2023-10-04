import { Request, Response } from 'express';
import { SecretariaService } from '../services/secretariaServices';

const secretariaService = new SecretariaService();

export const criarSecretaria = async (req: Request, res: Response) => {
  try {
    const secretaria = await secretariaService.criarSecretaria(req.body);
    res.json(secretaria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar secretaria' });
  }
};

export const obterSecretariaPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const secretaria = await secretariaService.obterSecretariaPorId(Number(id));
    res.json(secretaria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter secretaria por ID' });
  }
};

export const atualizarSecretaria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const secretaria = await secretariaService.atualizarSecretaria(Number(id), req.body);
    res.json(secretaria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar secretaria' });
  }
};

export const excluirSecretaria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await secretariaService.excluirSecretaria(Number(id));
    res.json({ message: 'Secretaria excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir secretaria' });
  }
};
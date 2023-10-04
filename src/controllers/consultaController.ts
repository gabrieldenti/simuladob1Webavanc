import { Request, Response } from 'express';
import { ConsultaService } from '../services/consultaServices';

const consultaService = new ConsultaService();

export const criarConsulta = async (req: Request, res: Response) => {
  try {
    const consulta = await consultaService.criarConsulta(req.body);
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar consulta' });
  }
};

export const obterConsultaPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const consulta = await consultaService.obterConsultaPorId(Number(id));
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter consulta por ID' });
  }
};

export const atualizarConsulta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const consulta = await consultaService.atualizarConsulta(Number(id), req.body);
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar consulta' });
  }
};

export const excluirConsulta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await consultaService.excluirConsulta(Number(id));
    res.json({ message: 'Consulta excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir consulta' });
  }
};
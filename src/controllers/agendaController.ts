import { Request, Response } from 'express';
import { AgendaService } from '../services/agendaServices';

const agendaService = new AgendaService();

export const criarAgenda = async (req: Request, res: Response) => {
  try {
    const agenda = await agendaService.criarAgenda(req.body);
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar agenda' });
  }
};

export const obterAgendaPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const agenda = await agendaService.obterAgendaPorId(Number(id));
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter agenda por ID' });
  }
};

export const atualizarAgenda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const agenda = await agendaService.atualizarAgenda(Number(id), req.body);
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar agenda' });
  }
};

export const excluirAgenda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await agendaService.excluirAgenda(Number(id));
    res.json({ message: 'Agenda excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir agenda' });
  }
};
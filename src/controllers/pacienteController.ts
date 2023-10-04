import { Request, Response } from 'express';
import { PacienteService } from '../services/pacienteServices';

const pacienteService = new PacienteService();

export const criarPaciente = async (req: Request, res: Response) => {
  try {
    const paciente = await pacienteService.criarPaciente(req.body);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
};

export const obterPacientePorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const paciente = await pacienteService.obterPacientePorId(Number(id));
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter paciente por ID' });
  }
};

export const atualizarPaciente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const paciente = await pacienteService.atualizarPaciente(Number(id), req.body);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
};

export const excluirPaciente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pacienteService.excluirPaciente(Number(id));
    res.json({ message: 'Paciente excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir paciente' });
  }
};
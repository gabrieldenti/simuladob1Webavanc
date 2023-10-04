import { Consulta, Prisma } from '@prisma/client';

export interface Paciente {
  id: number;
  nomePcnte: string;
  senha: number;
  usuario: string;
  consultas: Consulta[];
}

export type CreatePacienteInput = Prisma.PacienteCreateInput;
export type UpdatePacienteInput = Prisma.PacienteUpdateInput;
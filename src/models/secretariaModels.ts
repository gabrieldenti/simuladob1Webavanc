import { Agenda, Consulta, Paciente, Prisma } from '@prisma/client';

export interface Secretaria {
  id: number;
  nome: string;
  RG: number;
  pacientes: Paciente[];
  consultas: Consulta[];
  agendas: Agenda[];
}

export type CreateSecretariaInput = Prisma.SecretariaCreateInput;
export type UpdateSecretariaInput = Prisma.SecretariaUpdateInput;
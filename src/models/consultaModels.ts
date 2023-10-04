import { Paciente, Prisma } from '@prisma/client';

export interface Consulta {
  id: number;
  data: Date;
  nomePcnte: string;
  nomeDents: string;
  paciente: Paciente;
}

export type CreateConsultaInput = Prisma.ConsultaCreateInput;
export type UpdateConsultaInput = Prisma.ConsultaUpdateInput;
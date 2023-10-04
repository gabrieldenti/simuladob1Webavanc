import { Prisma } from '@prisma/client';

export interface Agenda {
  id: number;
  data: Date;
  nomePcnt: string;
}

export type CreateAgendaInput = Prisma.AgendaCreateInput;
export type UpdateAgendaInput = Prisma.AgendaUpdateInput;
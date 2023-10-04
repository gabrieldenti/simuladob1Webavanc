import { PrismaClient, Agenda } from '@prisma/client';

const prisma = new PrismaClient();

export class AgendaService {
  async criarAgenda(dados: Agenda) {
    return prisma.agenda.create({ data: dados });
  }

  async obterAgendaPorId(id: number) {
    return prisma.agenda.findUnique({ where: { id } });
  }

  async atualizarAgenda(id: number, dados: Agenda) {
    return prisma.agenda.update({ where: { id }, data: dados });
  }

  async excluirAgenda(id: number) {
    return prisma.agenda.delete({ where: { id } });
  }
}
import { PrismaClient, Consulta } from '@prisma/client';

const prisma = new PrismaClient();

export class ConsultaService {
  async criarConsulta(dados: Consulta) {
    return prisma.consulta.create({ data: dados });
  }

  async obterConsultaPorId(id: number) {
    return prisma.consulta.findUnique({ where: { id } });
  }

  async atualizarConsulta(id: number, dados: Consulta) {
    return prisma.consulta.update({ where: { id }, data: dados });
  }

  async excluirConsulta(id: number) {
    return prisma.consulta.delete({ where: { id } });
  }
}

export default new ConsultaService();
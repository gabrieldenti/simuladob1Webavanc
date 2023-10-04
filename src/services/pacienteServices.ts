import { PrismaClient, Paciente } from '@prisma/client';

const prisma = new PrismaClient();

export class PacienteService {
  async criarPaciente(dados: Paciente) {
    return prisma.paciente.create({ data: dados });
  }

  async obterPacientePorId(id: number) {
    return prisma.paciente.findUnique({ where: { id } });
  }

  async atualizarPaciente(id: number, dados: Paciente) {
    return prisma.paciente.update({ where: { id }, data: dados });
  }

  async excluirPaciente(id: number) {
    return prisma.paciente.delete({ where: { id } });
  }
}

export default new PacienteService();
import { PrismaClient, Secretaria } from '@prisma/client';

const prisma = new PrismaClient();

export class SecretariaService {
  async criarSecretaria(dados: Secretaria) {
    return prisma.secretaria.create({ data: dados });
  }

  async obterSecretariaPorId(id: number) {
    return prisma.secretaria.findUnique({ where: { id } });
  }

  async atualizarSecretaria(id: number, dados: Secretaria) {
    return prisma.secretaria.update({ where: { id }, data: dados });
  }

  async excluirSecretaria(id: number) {
    return prisma.secretaria.delete({ where: { id } });
  }
}
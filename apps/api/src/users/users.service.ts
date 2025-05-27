import { Injectable } from '@nestjs/common';
const { prisma } = require('@repo/database');

@Injectable()
export class UsersService {
  async findAll() {
    return prisma.user.findMany();
  }

  async findOne(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: { email: string; name?: string }) {
    return prisma.user.create({
      data,
    });
  }

  async update(id: number, data: { email?: string; name?: string }) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}

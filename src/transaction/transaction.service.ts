import { Injectable } from '@nestjs/common';
import { Prisma, Transaction } from 'src/generated/prisma/client';
import { v4 as uuid } from 'uuid';
import PrismaService from 'src/prisma.service';

@Injectable()
export default class TransactionService {
  constructor(private prisma: PrismaService) {}

  async addTransaction(
    data: Prisma.TransactionCreateInput,
  ): Promise<Transaction> {
    if (!data.id) data.id = uuid();
    if (!data.createTime) data.createTime = Date.now();

    data.updateTime = Date.now();

    return this.prisma.transaction.create({ data });
  }

  async getAll(): Promise<Transaction[]> {
    return await this.prisma.transaction.findMany();
  }
}

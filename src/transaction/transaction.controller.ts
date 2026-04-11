import { Body, Controller, Post } from '@nestjs/common';
import { type Transaction } from 'src/generated/prisma/client';
import TransactionService from './transaction.service';

@Controller('transaction/')
export default class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('create')
  async createTransaction(@Body() data: Transaction): Promise<Transaction> {
    return await this.transactionService.createTransaction(data);
  }
}

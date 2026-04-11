import { Body, Controller, Delete, Get, Logger, Post } from '@nestjs/common';
import { type Transaction } from 'src/generated/prisma/client';
import TransactionService from './transaction.service';
import { DeleteTransactionResponse } from './transaction.types';

@Controller('transaction/')
export default class TransactionController {
  private logger = new Logger(TransactionController.name);

  constructor(private transactionService: TransactionService) {}

  @Post('add')
  async addTransaction(@Body() data: Transaction): Promise<Transaction> {
    this.logger.log('Add transaction API called');

    return await this.transactionService.addTransaction(data);
  }

  @Get('get')
  async getAll(): Promise<Transaction[]> {
    this.logger.log('Get transaction API called');

    return await this.transactionService.getAll();
  }

  @Delete('delete')
  async deleteAll(): Promise<DeleteTransactionResponse> {
    const count = await this.transactionService.deleteAll();

    return {
      status: 'Success',
      count: count,
    };
  }
}

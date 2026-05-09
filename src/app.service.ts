import { Injectable } from '@nestjs/common';
import { PingResponse } from './transaction/transaction.types';

@Injectable()
export class AppService {

  ping(): PingResponse {
    return {
      status: "success"
    };
  }
}

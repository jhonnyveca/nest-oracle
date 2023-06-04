import { Inject, Injectable } from '@nestjs/common';
import oracledb from 'oracledb';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class OracleService {
  constructor(
    @Inject('CONEXION_CLIENT') private connection: oracledb.Connection,
  ) {}
  async getProducts(): Promise<any> {
    const result = await this.connection.execute(`BEGIN `);
  }
}

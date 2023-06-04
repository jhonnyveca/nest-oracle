import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import oracledb from 'oracledb';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'CONEXION_CLIENT',
      useFactory: async () =>
        await oracledb.getConnection({
          username: 'sys',
          password: 'ora123',
          connectString: 'localhost:1521/ORCL',
        }),
    },
  ],
})
export class AppModule {}

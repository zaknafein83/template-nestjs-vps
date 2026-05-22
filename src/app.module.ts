import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { HealthController } from './health.controller';

@Module({
  imports: [
    TerminusModule,
    // Per attivare TypeORM con Postgres, scommenta:
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   autoLoadEntities: true,
    //   synchronize: false,
    // }),
  ],
  controllers: [AppController, HealthController],
})
export class AppModule {}

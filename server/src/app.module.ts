import { Module } from '@nestjs/common';
import { QuizModule } from './features/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './common/config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuestionModule } from './features/questions/questions.module';

@Module({
  imports: [
    QuizModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    QuestionModule,
  ],
})
export class AppModule {}

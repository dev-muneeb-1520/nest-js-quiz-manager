import { Module } from '@nestjs/common';
import { QuestionController } from './questions.controller';
import { QuestionService } from './questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entity/questions.entity';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), QuizModule],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService]
})
export class QuestionModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entity/questions.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Quiz } from '../quiz/entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questRepo: Repository<Question>,
  ) {}

  async create(questDto: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQuestion = this.questRepo.create({
      ...questDto,
      quiz,
    });
    return await this.questRepo.save(newQuestion);
  }
}

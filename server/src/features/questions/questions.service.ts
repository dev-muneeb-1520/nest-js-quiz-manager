import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entity/questions.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questRepo: Repository<Question>,
  ) {}

  async create(questDto: CreateQuestionDto): Promise<Question> {
    const question = this.questRepo.create(questDto);
    return this.questRepo.save(question);
  }


}

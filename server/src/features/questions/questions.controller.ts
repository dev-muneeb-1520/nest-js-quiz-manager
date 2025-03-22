import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './questions.service';

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() questionDto: CreateQuestionDto) {
    return await this.questionService.create(questionDto);
  }
}

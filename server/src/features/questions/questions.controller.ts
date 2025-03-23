import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './questions.service';
import { QuizService } from '../quiz/quiz.service';

@Controller('questions')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() questionDto: CreateQuestionDto) {
    const quiz = await this.quizService.findById(questionDto.quizId);
    return await this.questionService.create(questionDto, quiz);
  }
}

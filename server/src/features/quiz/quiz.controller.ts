import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(
    private readonly quizService: QuizService,
  ){}

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(
    @Body() createQuizDto: CreateQuizDto
  ) {
    return await this.quizService.create(createQuizDto)
  }


}

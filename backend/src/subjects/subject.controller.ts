import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get('')
  async getSubjects() {
    return await this.subjectService.getSubjects();
  }
}

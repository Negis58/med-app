import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubjectModel } from './subject.model';
import { SubjectController } from './subject.controller';

@Module({
  providers: [SubjectService],
  imports: [SequelizeModule.forFeature([SubjectModel])],
  controllers: [SubjectController],
})
export class SubjectModule {}

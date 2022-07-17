import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubjectModel } from './subject.model';
import sequelize, { Op } from 'sequelize';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(SubjectModel)
    private readonly supplierModel: typeof SubjectModel,
  ) {}
  async getSubjects() {
    return await this.supplierModel.findAll({
      where: {
        p00: {
          [Op.or]: [{ [Op.like]: '0%' }, { [Op.like]: '13%' }],
        },
        where: sequelize.where(
          sequelize.fn('length', sequelize.col('p00')),
          10,
        ),
      },
    });
  }
}
